import { useId } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import cx from 'classnames';
import styles from './RadioGroup.module.css';

export type RadioOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

// Keep all of Radix's props (value, defaultValue, onValueChange, orientation…)
// but replace `children` with a simple `options` array
export type RadioGroupProps = Omit<RadioGroupPrimitive.RadioGroupProps, 'children'> & {
  label: string;
  options: RadioOption[];
};

export function RadioGroup({ label, options, className, ...props }: RadioGroupProps) {
  const labelId = useId();

  return (
    <div className={cx(styles.group, className)}>
      <span id={labelId} className={styles.legend}>
        {label}
      </span>

      <RadioGroupPrimitive.Root aria-labelledby={labelId} className={styles.root} {...props}>
        {options.map((option) => {
          const itemId = `${labelId}-${option.value}`;
          return (
            <div key={option.value} className={styles.option}>
              <RadioGroupPrimitive.Item
                id={itemId}
                value={option.value}
                disabled={option.disabled}
                className={styles.item}
              >
                <RadioGroupPrimitive.Indicator className={styles.indicator} />
              </RadioGroupPrimitive.Item>
              <label htmlFor={itemId} className={styles.optionLabel}>
                {option.label}
              </label>
            </div>
          );
        })}
      </RadioGroupPrimitive.Root>
    </div>
  );
}