import IndicatorBox from "../../UI/IndicatorBox/IndicatorBox";
import PRIORITY from "../../../Util/Priority";

import styles from "./TodoItem.module.css";
import { useState } from "react";

const TodoItem = (props) => {
    const info = props.todoInfo.description;
    const color = PRIORITY[props.todoInfo.priority].color;
    const colorPriority = PRIORITY[props.todoInfo.priority].priority;
    const todoID = props.todoInfo.id;

    const [isChecked, setIsChecked] = useState(false);

    const changedCheckStatusHandler = () => {
        setIsChecked(isChecked ? false : true);
    };

    return (
        <li className={`${styles["list-item"]}`}>
            <span className={isChecked ? styles["strike-through"] : ""}>
                {info}
            </span>
            <div className={styles["item-right"]}>
                <span>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={changedCheckStatusHandler}
                    />
                </span>
                <span>✏️</span>
                <span onClick={() => props.onDelete(todoID)}>🗑️</span>
                <IndicatorBox color={color}>{colorPriority}</IndicatorBox>
            </div>
        </li>
    );
};

export default TodoItem;
