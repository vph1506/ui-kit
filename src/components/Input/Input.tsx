import { useId, type ComponentProps } from 'react';
import cx from 'classnames';
import styles from './Input.module.css';

export type InputSize = 'sm' | 'md';

export type InputProps = Omit<ComponentProps<'input'>, 'size'> & {
  label: string;
  hint?: string;
  error?: string;
  size?: InputSize;
};

export function Input({ label, hint, error, size = 'md', required, id, className, ...props }: InputProps) {
  // useId gives a stable, unique id so the label and messages can point at the input
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;

  const describedBy = cx({ [hintId]: hint, [errorId]: error }) || undefined;

  return (
    <div className={cx(styles.field, className)}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">*</span>
        )}
      </label>

      <input
        id={inputId}
        className={cx(styles.input, styles[size])}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...props}
      />

      {hint && <p id={hintId} className={styles.hint}>{hint}</p>}
      {error && <p id={errorId} className={styles.error}>{error}</p>}
    </div>
  );
}