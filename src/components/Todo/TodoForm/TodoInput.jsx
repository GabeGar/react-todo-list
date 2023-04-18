import React from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import Title from "../../UI/Title/Title";
import styles from "./TodoInput.module.css";

const TodoInput = () => {
    return (
        <Card>
            <form className={styles.form}>
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
                        />
                    </div>
                    <div className={styles["form-ctrl"]}>
                        <label htmlFor="priority">Select Priority: </label>
                        <select name="priority" id="priority">
                            <option value="high">High</option>
                            <option value="med">Medium</option>
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
