import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHint: Story = {
  args: { hint: "We'll never share your email." },
};

export const WithError: Story = {
  args: {
    defaultValue: 'not-an-email',
    error: 'Enter a valid email address.',
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Required: Story = {
  args: { required: true },
};

export const Small: Story = {
  args: { size: 'sm' },
};