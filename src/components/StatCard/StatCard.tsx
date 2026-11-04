import cx from 'classnames';
import { Card, CardContent, CardDescription, CardHeader, type CardProps } from '../Card/Card';
import styles from './StatCard.module.css';

export type StatCardProps = Omit<CardProps, 'children'> & {
  label: string;
  value: string | number;
  trend?: number; // percent change: positive is up, negative is down
};

function Trend({ value }: { value: number }) {
  const direction = value > 0 ? 'up' : value < 0 ? 'down' : 'flat';
  const word = { up: 'Up', down: 'Down', flat: 'Flat' }[direction];

  return (
    <span className={cx(styles.trend, styles[direction])}>
      {direction !== 'flat' && (
        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
          <path
            d="M8 13V3M3.5 7.5L8 3l4.5 4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span className={styles.srOnly}>{word}</span>
      {Math.abs(value)}%
    </span>
  );
}

export function StatCard({ label, value, trend, className, ...props }: StatCardProps) {
  return (
    <Card className={cx(styles.stat, className)} {...props}>
      <CardHeader>
        <CardDescription>{label}</CardDescription>
      </CardHeader>
      <CardContent className={styles.row}>
        <span className={styles.value}>{value}</span>
        {trend !== undefined && <Trend value={trend} />}
      </CardContent>
    </Card>
  );
}
