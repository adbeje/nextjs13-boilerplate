import type { Meta, StoryObj } from "@storybook/react";
import { LogoName } from "./LogoName";

const meta: Meta<typeof LogoName> = {
  component: LogoName,
};

export default meta;
type Story = StoryObj<typeof LogoName>;

export const Primary: Story = {};
