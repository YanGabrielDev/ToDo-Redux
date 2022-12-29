import React from "react"
import { Form, FormInterface } from "./index"

export default {
  title: "Form",
  component: Form,
  args: {},
  argTypes: {
    children: "",
  },
}

export const Template = (args: FormInterface) => <Form {...args} />
