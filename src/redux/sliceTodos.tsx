import { createSlice } from "@reduxjs/toolkit"

export interface ToDo {
  id: number
  title: string
  task: string
}

const INITIAL_STATE: ToDo[] = [
  
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
    deleteTodo(state, action) {
   let opa = state.filter((todo, index) => action.payload !== index)
     return opa;
     
     
    },
  },
})

export default sliceTodos.reducer

export const { addTodo, deleteTodo } = sliceTodos.actions

export const useTodos = (state: any) => {
  return state.todos as ToDo[]
}
