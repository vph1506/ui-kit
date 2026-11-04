import type { ComponentProps } from 'react';
import cx from 'classnames';
import { Button } from '../Button/Button';
import styles from './Card.module.css';

/* ---------- Card ---------- */

export type CardVariant = 'outlined' | 'elevated';

export type CardProps = ComponentProps<'article'> & {
  variant?: CardVariant;
};

export function Card({ variant = 'outlined', className, ...props }: CardProps) {
  return <article className={cx(styles.card, styles[variant], className)} {...props} />;
}

/* ---------- Header (composes Button for dismiss) ---------- */

export type CardHeaderProps = ComponentProps<'header'> & {
  onDismiss?: () => void;
  dismissLabel?: string;
};

export function CardHeader({
  onDismiss,
  dismissLabel = 'Dismiss',
  className,
  children,
  ...props
}: CardHeaderProps) {
  return (
    <header className={cx(styles.header, className)} {...props}>
      <div className={styles.headerText}>{children}</div>

      {onDismiss && (
        <Button
          variant="ghost"
          size="sm"
          aria-label={dismissLabel}
          onClick={onDismiss}
          className={styles.dismiss}
        >
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
            <path
              d="M4 4l8 8M12 4l-8 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Button>
      )}
    </header>
  );
}

/* ---------- Text parts ---------- */

export function CardTitle({ className, ...props }: ComponentProps<'h3'>) {
  return <h3 className={cx(styles.title, className)} {...props} />;
}

export function CardDescription({ className, ...props }: ComponentProps<'p'>) {
  return <p className={cx(styles.description, className)} {...props} />;
}

export function CardContent({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cx(styles.content, className)} {...props} />;
}

/* ---------- Footer ---------- */

export type CardFooterProps = ComponentProps<'footer'> & {
  align?: 'start' | 'end' | 'between';
};

export function CardFooter({ align = 'end', className, ...props }: CardFooterProps) {
  return (
    <footer
      className={cx(
        styles.footer,
        {
          [styles.alignStart]: align === 'start',
          [styles.alignEnd]: align === 'end',
          [styles.alignBetween]: align === 'between',
        },
        className,
      )}
      {...props}
    />
  );
}

/* ---------- Media ---------- */

export type CardMediaProps = ComponentProps<'img'> & { alt: string };

export function CardMedia({ className, alt, ...props }: CardMediaProps) {
  return <img className={cx(styles.media, className)} alt={alt} {...props} />;
}
