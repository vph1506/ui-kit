import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea } from './TextArea';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCount: Story = {
  args: {
    hint: 'Shown on your public profile.',
    showCount: true,
    maxLength: 200,
  },
};

export const WithError: Story = {
  args: {
    defaultValue: 'Hi',
    error: 'Bio must be at least 20 characters.',
  },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'You can’t edit this right now.' },
};

export const AutoGrow: Story = {
  args: {
    autoGrow: true,
    rows: 2,
    defaultValue: 'Type here and keep going.\nThe box grows as you add lines.',
  },
};

export const CountWarning: Story = {
  args: {
    showCount: true,
    maxLength: 50,
    defaultValue: 'Almost out of room, only a few characters left',
  },
};
