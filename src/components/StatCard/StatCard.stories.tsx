import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatCard } from './StatCard';

const meta = {
  title: 'Components/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  args: { label: 'Monthly revenue', value: '$48,200', trend: 12.4 },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 280 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Up: Story = {};
export const Down: Story = { args: { label: 'Churn rate', value: '3.1%', trend: -0.8 } };
export const Flat: Story = { args: { label: 'Active users', value: 1204, trend: 0 } };
export const NoTrend: Story = { args: { label: 'Open tickets', value: 37, trend: undefined } };
