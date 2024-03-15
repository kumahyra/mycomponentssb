import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { KumaButton } from '../components/KumaButton';

const meta = {
  title: 'Components/KumaButton',
  component: KumaButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof KumaButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'KumaButton',
  },
};

export const Secondary: Story = {
  args: {
    label: 'KumaButton',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'KumaButton',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'KumaButton',
  },
};
