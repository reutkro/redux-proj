import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "./hooks";
import { changeDone, changeUserName, addTodo, deleteTodo, selectTodo, selectUserName, getTodos, addNewTodo } from "./slice";

export const TodoList: React.FC = () => {

    useEffect(() => {
        dispatch(getTodos([
            { title: "g", done: true },
            { title: "be", done: false },
            { title: "ct", done: true }
        ]))
    }, [])

    const [newTitle, setNewTitle] = useState('')
    const [newUserName, setNewUserName] = useState('')
    const todo = useAppSelector(selectTodo)
    const userName = useAppSelector(selectUserName)
    const dispatch = useAppDispatch();

    const hendelNewTitle = (e: string) => {
        setNewTitle(e)
    }

    const hendelNewUserName = (e: string) => {
        setNewUserName(e)
    }

    return (
        <div>
            user: {userName}
            {todo.map((todo, i) => <div key={i}>
                {todo.title}:
                {todo.done ? <button onClick={() => dispatch(changeDone(i))}> done </button> : <button onClick={() => dispatch(changeDone(i))}>not done</button>}
                <button onClick={() => dispatch(deleteTodo(i))}>delete</button>
            </div>)}
            <div>
                addTodo:
                title: <input type="string" onChange={(e) => hendelNewTitle(e.target.value)} value={newTitle} />
                <button onClick={() => dispatch(addNewTodo(newTitle))} > אישור</button>
            </div>
            <div>change user name:
                <input type="string" onChange={(e) => hendelNewUserName(e.target.value)} value={newUserName} />
                <button onClick={() => dispatch(changeUserName(newUserName))} > אישור</button>
            </div>
        </div>
    )
}