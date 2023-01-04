import { configureStore } from "@reduxjs/toolkit"
import sliceTodos from "./sliceTodos"

export const store = configureStore({
  reducer: {
    todos: sliceTodos,
  },
})

export default store
