import { createSlice } from "@reduxjs/toolkit"

export interface ToDo {
  title: string
  task: string
}

const INITIAL_STATE: ToDo[] = [
  {title: 'opa', task: 'fazer'}
]

const sliceTodos = createSlice({
  name: "Todos",
  initialState: INITIAL_STATE,
  reducers: {
    addTodo(state, action) {
    state.push(
      action.payload 
    ) 
    },
  },
})

export default sliceTodos.reducer

export const { addTodo } = sliceTodos.actions

export const useTodos = (state: any) => {
  return state.todos as ToDo[]
}
