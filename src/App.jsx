import React, { useState } from "react";
import TodoInput from "./components/Todo/TodoForm/TodoInput";
import Title from "./components/UI/Title/Title";
import TodoList from "./components/Todo/TodoList/TodoList";

import styles from "./App.module.css";

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (newTodo) => {
        setTodos((prevTodos) => {
            return [newTodo, ...prevTodos];
        });
    };

    const removeTodoHandler = (todoID) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => {
                return todo.id !== todoID;
            });
        });
    };

    return (
        <>
            <h1 className={styles.header}>TODO LIST</h1>
            <Title>Todo Input</Title>
            <TodoInput onAddTodo={addTodoHandler} />

            <Title>Your Todos</Title>
            <TodoList todoList={todos} removeTodo={removeTodoHandler} />
        </>
    );
};

export default App;
