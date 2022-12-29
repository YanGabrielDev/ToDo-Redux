import React from "react"
import { Content, ContentInterface } from "./index"

export default {
  title: "Content",
  component: Content,
  args: {
    children:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis inventore magnam reprehenderit qui sequi corrupti earum doloremqueminus eaque. Officia laudantium asperiores quod distinctio ipsa sit",
  },
  argTypes: {
    children: "",
  },
}

export const Template = (args: ContentInterface) => <Content {...args} />
