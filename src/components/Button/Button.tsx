// ComponentProps is a type
import type { ComponentProps } from 'react';
// cx joins class names, skipping any that are false or empty
import cx from 'classnames';
import styles from './Button.module.css';

// Union types
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';


export type ButtonProps = ComponentProps<'button'> & {
  // the ? means optional
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
};

// Pulls props out of the object by name, sets default values and collects the rest into ...props
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled,
  className,
  type = 'button', // Without this it becomes a submit button inside a form
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(
        styles.button, 
        styles[variant], // It picks a class by name 
        styles[size],
        { [styles.fullWidth]: fullWidth, [styles.loading]: loading }, 
        className,
      )}
      disabled={disabled || loading} // A loading button is also disabled to prevent users from clicking the button again while it's still working
      aria-busy={loading || undefined} // React uses undefined as a way to express not writing this attribute at all
      {...props}
    >
      
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {children}
    </button>
  );
}