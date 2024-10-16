import styles from "../../styles/Column.module.css";

const Column = ({ title }) => {
    return (<div className={styles.column}>
        <h2 className={styles.columnTitle}>{title}</h2>
    </div>)
}

export default Column;