import styles from "../../styles/Column.module.css";

const Column = ({ title, tasks }) => {
    return (<div className={styles.column}>
        <h3>{title}</h3>
        <div className={styles.taskList}>
            {tasks.map((task, index) => (
                <div key={index} className={styles.task}>
                    <h4>{task.title}</h4>
                    {!!task.description && <p className={styles.taskDescription}>{task.description}</p>}
                </div>
            ))}
        </div>
    </div>)
}

export default Column;