// Meta and StoryObj are types from Storybook
import type { Meta, StoryObj } from '@storybook/react-vite';
// Creates a fake function that records every call 
import { fn } from 'storybook/test';
// The real component being shown 
import { Button } from './Button';

// Holds the settings shared by every story in the file
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'], // Auto-generates the Docs page
  args: {
    children: 'Button',
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Button>; // Makes TypeScript check that the object is a valid meta for Button

export default meta; // Required, this is how Storybook finds the settings
type Story = StoryObj<typeof meta>;

// Each export const is one story
export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
};

export const Danger: Story = {
  args: { variant: 'danger', children: 'Delete project' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const FullWidth: Story = {
  args: { fullWidth: true},
};

export const Loading: Story = {
  args: { loading: true },
};

// A custom render lets one story show several buttons at once
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};