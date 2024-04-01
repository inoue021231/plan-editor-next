import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const redButton: Story = {
  args: {
    children: "ボタン"
  },
};
