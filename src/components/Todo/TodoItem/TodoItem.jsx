import { useState } from "react";
import Button from "../../UI/Button/Button";
import IndicatorBox from "../../UI/IndicatorBox/IndicatorBox";
import PRIORITY from "../../../Util/Priority";

import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
    const info = props.todoInfo.description;
    const color = PRIORITY[props.todoInfo.priority].color;
    const colorPriority = PRIORITY[props.todoInfo.priority].priority;
    const todoID = props.todoInfo.id;

    const [description, setDescription] = useState(info);
    const [priority, setPriority] = useState(props.todoInfo.priority);

    const [isChecked, setIsChecked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const changedCheckStatusHandler = () => {
        setIsChecked(isChecked ? false : true);
    };

    const updateEditingHandler = (e) => {
        if (e.target.type === "button") {
            const editedTodo = {
                description,
                priority,
                id: todoID,
            };

            props.onEdit(editedTodo);
        }

        setIsEditing(isEditing ? false : true);
    };

    const editTodoDescriptionHandler = (e) => {
        setDescription(e.target.value);
    };

    const editTodoPriorityHandler = (e) => {
        setPriority(e.target.value);
    };

    return (
        <li className={`${styles["list-item"]}`}>
            {!isEditing && (
                <span className={isChecked ? styles["strike-through"] : ""}>
                    {info}
                </span>
            )}
            {isEditing && (
                <div>
                    <label htmlFor="description">📋</label>
                    <input
                        id="description"
                        type="text"
                        value={description}
                        onChange={editTodoDescriptionHandler}
                    />
                </div>
            )}
            {!isEditing && (
                <div className={styles["item-right"]}>
                    <span>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={changedCheckStatusHandler}
                        />
                    </span>
                    <span onClick={updateEditingHandler}>✏️</span>
                    <span onClick={() => props.onDelete(todoID)}>🗑️</span>
                    <IndicatorBox color={color}>{colorPriority}</IndicatorBox>
                </div>
            )}
            {isEditing && (
                <span>
                    Select Priority:{" "}
                    <select value={priority} onChange={editTodoPriorityHandler}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </span>
            )}
            {isEditing && description && (
                <Button
                    onClick={updateEditingHandler}
                    className={styles["edit-button"]}
                >
                    Save
                </Button>
            )}
        </li>
    );
};

export default TodoItem;
