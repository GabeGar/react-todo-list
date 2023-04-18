import React from "react";
import TodoInput from "./components/Todo/TodoForm/TodoInput";
import Title from "./components/UI/Title/Title";
import Indicator from "./components/UI/Indicator/Indicator";

import styles from "./App.module.css";

const App = () => {
    return (
        <>
            <h1 className={styles.header}>TODO LIST</h1>
            <Title>Todo Input</Title>
            <TodoInput />

            <Title>Priority Indicators</Title>
            <section className={styles.section}>
                <Indicator color="red" />
                <Indicator color="yellow" />
                <Indicator color="green" />
            </section>
        </>
    );
};

export default App;
