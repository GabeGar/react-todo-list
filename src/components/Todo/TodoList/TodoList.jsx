import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = (props) => {
    const todoContent = props.todoList.map((todo) => {
        return (
            <TodoItem
                todoInfo={todo}
                key={todo.id}
                onDelete={props.removeTodo}
            ></TodoItem>
        );
    });

    return (
        <ul className={styles.list}>
            {todoContent.length === 0 && (
                <div className={styles.temp}>
                    {"--->"} You have no todos 😟. Add some! {"<---"}
                </div>
            )}
            {todoContent}
        </ul>
    );
};

export default TodoList;
