import Input from "./label";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Form/Label",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Label: Story = {
  args: {
    children: 'This is label'
  },
};
