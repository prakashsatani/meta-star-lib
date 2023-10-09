import Input from "./input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    elementType: "input",
    name: "Name",
    label: "Full name",
    className: "input-name",
    placeholder: "Full name",
  },
};

export const TextInputWithoutLabel: Story = {
  args: {
    elementType: "input",
    name: "Name",
    placeholder: "Full name",
  },
};

export const TextArea: Story = {
  args: {
    elementType: "textarea",
    name: "message",
    label: "Message",
  },
};

export const SelectBox: Story = {
  args: {
    elementType: "select",
    name: "gender",
    label: "Gender",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" },
    ],
  },
};
