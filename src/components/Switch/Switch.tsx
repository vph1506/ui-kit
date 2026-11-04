import { useId } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import cx from 'classnames';
import styles from './Switch.module.css';

export type SwitchProps = Omit<SwitchPrimitive.SwitchProps, 'children'> & {
  label: string;
};

export function Switch({ label, id, className, ...props }: SwitchProps) {
  const generatedId = useId();
  const switchId = id ?? generatedId;

  return (
    <div className={cx(styles.wrapper, className)}>
      <SwitchPrimitive.Root id={switchId} className={styles.root} {...props}>
        <SwitchPrimitive.Thumb className={styles.thumb} />
      </SwitchPrimitive.Root>

      <label htmlFor={switchId} className={styles.label}>
        {label}
      </label>
    </div>
  );
}
