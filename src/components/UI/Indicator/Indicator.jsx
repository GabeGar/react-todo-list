import styles from "./Indicator.module.css";

const COLORS = {
    red: {
        color: "red",
        priority: "High",
    },
    yellow: {
        color: "yellow",
        priority: "Med",
    },
    green: {
        color: "green",
        priority: "Low",
    },
};

const Indicator = (props) => {
    const color = COLORS[props.color].color;
    const priorityText = COLORS[props.color].priority;

    return (
        <>
            <div className={`${styles.indicator} ${styles[`${color}`]}`}>
                <span>{priorityText}</span>
            </div>
        </>
    );
};

export default Indicator;
