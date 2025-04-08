import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {
    const initialState = []
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    const todosCount = todos.length

    const pendingTodosCount = todos.filter(todo => !todo.done).length

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo,
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'Remove Todo',
            payload: id,
        })
    }

    const onToggleTodo = (id) => {
        dispatch({
            type: 'Toggle Todo',
            payload: id,
        })
    }

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleDeleteTodo,
        handleNewTodo,
        onToggleTodo
    }
}
