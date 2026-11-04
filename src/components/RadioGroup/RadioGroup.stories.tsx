import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { RadioGroup } from './RadioGroup';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  args: {
    label: 'Delivery speed',
    defaultValue: 'standard',
    onValueChange: fn(),
    options: [
      { value: 'standard', label: 'Standard (5–7 days)' },
      { value: 'express', label: 'Express (2–3 days)' },
      { value: 'overnight', label: 'Overnight' },
    ],
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { value: 'standard', label: 'Standard (5–7 days)' },
      { value: 'express', label: 'Express (2–3 days)' },
      { value: 'overnight', label: 'Overnight (sold out)', disabled: true },
    ],
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};