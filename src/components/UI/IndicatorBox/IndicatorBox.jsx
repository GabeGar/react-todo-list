import styles from "./IndicatorBox.module.css";

const IndicatorBox = (props) => {
    return (
        <div className={`${styles.indicator} ${styles[`${props.color}`]}`}>
            {props.children}
        </div>
    );
};

export default IndicatorBox;
