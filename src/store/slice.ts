import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"
import { AppThunk } from "./store"
import { fetchTodos } from "./todoAPI"

interface TodoInt {
    userName: string,
    todoList: { title: string, done: boolean }[] 
}

const todos = [
    { title: "a", done: true },
    { title: "b", done: false },
    { title: "c", done: true }
]

export const getTodos = createAsyncThunk(
    'store/fetchTodos',
    async (amount: { title: string, done: boolean }[]) => {
        const response = await fetchTodos(amount);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
)

const initialState: TodoInt = {
    userName: "aaa",
    todoList : todos
}

export const todoSlice = createSlice(
    {
        name: "todoList",
        initialState,
        reducers: {
            changeDone: (state, action) => {
                state.todoList[action.payload].done = !state.todoList[action.payload].done;
            },
            changeUserName: (state, action) => {
                state.userName = action.payload
            },
            addTodo: (state, action) => {

                state.todoList.push({
                    title: action.payload,
                    done: false
                })
            },
            deleteTodo: (state, action) => {
                state.todoList.splice(action.payload, 1);
            }
        },
        extraReducers: (builder) => {
            builder.addCase(getTodos.fulfilled, (state, action) => {
                action.payload.map(info => {
                    state.todoList.push(info);
                })

            });
        }
    }
)

export const addNewTodo = (title: string | null): AppThunk => (dispatch, getState) => {
    if (!title) {
        alert("ssssssssssss")
    } else {
        dispatch(addTodo(title))
    }
}

export default todoSlice.reducer;

export const { changeDone, changeUserName, addTodo, deleteTodo } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.list.todoList;
export const selectUserName = (state: RootState) => state.list.userName;