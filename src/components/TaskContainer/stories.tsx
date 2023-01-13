import { TaskContainer} from "./index"

export default {
  title: "TaskContainer",
  component: TaskContainer,
  args: {
    title: 'My title',
    task: 'My task'
  },
  argTypes: {
    title: "",
    task: ''
  },
}

export const Template = (args: TaskContainer) => <TaskContainer {...args} />