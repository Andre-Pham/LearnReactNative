import { configureStore, createSlice } from "@reduxjs/toolkit";
import ToDoList from "./MyClass";

class Model {

    // https://redux.js.org/introduction/getting-started
    // npm install @reduxjs/toolkit

    static toDoList = new ToDoList();

    static counterSlice = createSlice({
        name: 'counter',
        initialState: {
          value: 0
        },
        reducers: {
          incremented: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
          },
          decremented: state => {
            state.value -= 1
          }
        }
      })

      static store = configureStore({
        reducer: Model.counterSlice.reducer
      })

      

}

export default Model

export const { incremented, decremented } = Model.counterSlice.actions