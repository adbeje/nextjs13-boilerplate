import type { Meta, StoryObj } from "@storybook/react";
import { UserCard } from "./UserCard";

const meta: Meta<typeof UserCard> = {
  component: UserCard,
};

export default meta;
type Story = StoryObj<typeof UserCard>;

export const Primary: Story = {
  args: {
    userName: "UserNameHeader",
    name: "User Name",
    email: "username@gmail.com",
  },
};
