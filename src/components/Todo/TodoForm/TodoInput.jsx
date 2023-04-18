import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import styles from "./TodoInput.module.css";

const TodoInput = (props) => {
    const [userDescription, setUserDescription] = useState("");
    const [userPriority, setUserPriority] = useState("high");

    const handleChangedDescription = (e) => {
        setUserDescription(e.target.value);
    };

    const handleChangedPriority = (e) => {
        setUserPriority(e.target.value);
    };

    const TodoInputSubmitHandler = (e) => {
        e.preventDefault();

        const newTodo = {
            id: Math.random(),
            description: userDescription,
            priority: userPriority,
        };

        props.onAddTodo(newTodo);
        setUserDescription("");
        setUserPriority("high");
    };

    return (
        <Card>
            <form className={styles.form} onSubmit={TodoInputSubmitHandler}>
                <div className={styles["form-controls"]}>
                    <div className={styles["form-ctrl"]}>
                        <label
                            htmlFor="description"
                            className={styles["description-label"]}
                        >
                            📋
                        </label>
                        <input
                            type="text"
                            id="description"
                            placeholder="New Task Description"
                            onChange={handleChangedDescription}
                            value={userDescription}
                            required
                        />
                    </div>
                    <div className={styles["form-ctrl"]}>
                        <label htmlFor="priority">Select Priority: </label>
                        <select
                            name="priority"
                            id="priority"
                            onChange={handleChangedPriority}
                            value={userPriority}
                        >
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div className={styles["form-ctrl"]}>
                        <Button type="submit">Add New Task</Button>
                    </div>
                </div>
            </form>
        </Card>
    );
};

export default TodoInput;
