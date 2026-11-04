import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    label: 'Email me product updates',
    onCheckedChange: fn(),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Indeterminate: Story = {
  args: { checked: 'indeterminate', label: 'Select all' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

const OPTIONS = ['Email', 'SMS', 'Push notifications'];

export const SelectAll: Story = {
  render: function Render() {
    const [selected, setSelected] = useState<string[]>(['Email']);

    const parentChecked =
      selected.length === OPTIONS.length ? true
      : selected.length > 0 ? 'indeterminate'
      : false;

    return (
      <div style={{ display: 'grid', gap: 12 }}>
        <Checkbox
          label="Select all"
          checked={parentChecked}
          onCheckedChange={(checked) => setSelected(checked === true ? [...OPTIONS] : [])}
        />
        <div style={{ display: 'grid', gap: 8, paddingLeft: 28 }}>
          {OPTIONS.map((option) => (
            <Checkbox
              key={option}
              label={option}
              checked={selected.includes(option)}
              onCheckedChange={(checked) =>
                setSelected((prev) =>
                  checked === true ? [...prev, option] : prev.filter((o) => o !== option),
                )
              }
            />
          ))}
        </div>
      </div>
    );
  },
};
