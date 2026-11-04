import {
  useCallback, useId, useLayoutEffect, useRef, useState,
  type ChangeEvent, type ComponentProps,
} from 'react';
import cx from 'classnames';
import styles from './TextArea.module.css';

export type TextAreaProps = ComponentProps<'textarea'> & {
  label: string;
  hint?: string;
  error?: string;
  showCount?: boolean;
  autoGrow?: boolean;
};

export function TextArea({
  label,
  hint,
  error,
  showCount = false,
  autoGrow = false,
  id,
  className,
  rows = 4,
  onChange,
  ...props
}: TextAreaProps) {
  const generatedId = useId();
  const textAreaId = id ?? generatedId;
  const hintId = `${textAreaId}-hint`;
  const errorId = `${textAreaId}-error`;
  const describedBy = cx({ [hintId]: hint, [errorId]: error }) || undefined;

  const [internalLength, setInternalLength] = useState(String(props.defaultValue ?? '').length);
  const length = props.value !== undefined ? String(props.value).length : internalLength;
  const nearLimit = props.maxLength !== undefined && props.maxLength - length <= 10;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const resize = useCallback(() => {
    const el = textAreaRef.current;
    if (!autoGrow || !el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight + el.offsetHeight - el.clientHeight}px`;
  }, [autoGrow]);

  useLayoutEffect(resize, [resize, props.value]);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setInternalLength(event.target.value.length);
    resize();
    onChange?.(event);
  }

  return (
    <div className={cx(styles.field, className)}>
      <label htmlFor={textAreaId} className={styles.label}>
        {label}
      </label>

      <textarea
        ref={textAreaRef}
        id={textAreaId}
        rows={rows}
        className={cx(styles.textarea, { [styles.autoGrow]: autoGrow })}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        onChange={handleChange}
        {...props}
      />

      {(hint || error || showCount) && (
        <div className={styles.footer}>
          <div>
            {hint && <p id={hintId} className={styles.hint}>{hint}</p>}
            {error && <p id={errorId} className={styles.error}>{error}</p>}
          </div>
          {showCount && (
            <span className={cx(styles.count, { [styles.countWarning]: nearLimit })}>
              {props.maxLength ? `${length} / ${props.maxLength}` : length}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
