import styles from "../../styles/Column.module.css";

const Column = ({ title, children }) => {
    return (<div className={styles.column}>
        <h3>{title}</h3>
        <div className={styles.taskList}>{children}</div>
    </div>)
}

export default Column;