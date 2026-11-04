import type { Meta, StoryObj } from '@storybook/react-vite';
import heroImage from '../../assets/hero.png';
import { fn } from 'storybook/test';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardTitle,
} from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: { variant: 'outlined' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['outlined', 'elevated'] },
  },
  // Cards stretch to fill their container, so give the preview a sensible width
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 420 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Upgrade to Pro</CardTitle>
        <CardDescription>Unlimited projects and priority support.</CardDescription>
      </CardHeader>
      <CardContent>
        Your trial ends in 3 days. Upgrade now to keep everything you've built.
      </CardContent>
      <CardFooter>
        <Button variant="secondary">Maybe later</Button>
        <Button>Upgrade</Button>
      </CardFooter>
    </Card>
  ),
};

export const Elevated: Story = {
  ...Default,
  args: { variant: 'elevated' },
};

export const Dismissible: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader onDismiss={fn()}>
        <CardTitle>New: dark mode</CardTitle>
        <CardDescription>Switch themes from your profile settings.</CardDescription>
      </CardHeader>
      <CardFooter align="start">
        <Button variant="ghost" size="sm">Learn more</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithForm: Story = {
  render: (args) => (
    <Card {...args}>
      {/* display: contents lets the form's children sit in the card's layout */}
      <form onSubmit={(event) => event.preventDefault()} style={{ display: 'contents' }}>
        <CardHeader>
          <CardTitle>Invite a teammate</CardTitle>
          <CardDescription>They'll get an email with a link to join.</CardDescription>
        </CardHeader>
        <CardContent>
          <Input label="Email" type="email" placeholder="teammate@example.com" />
        </CardContent>
        <CardFooter align="between">
          <Button variant="ghost">Copy link</Button>
          <Button type="submit">Send invite</Button>
        </CardFooter>
      </form>
    </Card>
  ),
};

export const Destructive: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Delete this project?</CardTitle>
        <CardDescription>This can't be undone. All files will be removed.</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="secondary">Cancel</Button>
        <Button variant="danger">Delete project</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithMedia: Story = {
  render: (args) => (
    <Card {...args}>
      <CardMedia src={heroImage} alt="Abstract hero illustration" />
      <CardHeader>
        <CardTitle>Meet the new editor</CardTitle>
        <CardDescription>Faster, quieter, and easier on the eyes.</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button>Try it</Button>
      </CardFooter>
    </Card>
  ),
};
