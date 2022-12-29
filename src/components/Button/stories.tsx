import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button, ButtonInterface } from "./index"

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
  },
  argTypes: {
    children: "",
  },
}

export const Template = (args: ButtonInterface) => <Button {...args} />
