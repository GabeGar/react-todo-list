import IndicatorBox from "../../UI/IndicatorBox/IndicatorBox";
import PRIORITY from "../../../Util/Priority";

import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
    const info = props.todoInfo.description;
    const color = PRIORITY[props.todoInfo.priority].color;
    const colorPriority = PRIORITY[props.todoInfo.priority].priority;

    return (
        <li className={`${styles["list-item"]}`}>
            <span>{info}</span>
            <div className={styles["item-right"]}>
                <span>
                    <input type="checkbox" />
                </span>
                <span>✏️</span>
                <span>🗑️</span>
                <IndicatorBox color={color}>{colorPriority}</IndicatorBox>
            </div>
        </li>
    );
};

export default TodoItem;
