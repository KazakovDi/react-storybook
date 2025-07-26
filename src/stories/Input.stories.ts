import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { fn } from "storybook/test";

import { Input } from "../components/Input/Input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "number"],
    },
    clearable: { control: "boolean" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },

  args: {
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
  },
};

export const Clearable: Story = {
  args: {
    clearable: true,
    placeholder: "Type something to see clear button...",
  },
};

export const PasswordAndClearable: Story = {
  args: {
    type: "password",
    clearable: true,
    placeholder: "Password with clear option...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "This input is disabled",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter a number...",
    clearable: true,
  },
};
