import { useId } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import cx from 'classnames';
import styles from './Checkbox.module.css';

export type CheckboxProps = Omit<CheckboxPrimitive.CheckboxProps, 'children'> & {
  label: string;
};

export function Checkbox({ label, id, className, checked, ...props }: CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  return (
    <div className={cx(styles.wrapper, className)}>
      <CheckboxPrimitive.Root id={checkboxId} checked={checked} className={styles.root} {...props}>
        <CheckboxPrimitive.Indicator className={styles.indicator}>
          {checked === 'indeterminate' ? (
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M4 8h8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M3.5 8.5l3 3 6-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <label htmlFor={checkboxId} className={styles.label}>
        {label}
      </label>
    </div>
  );
}