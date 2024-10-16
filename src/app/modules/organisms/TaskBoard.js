import Column from "../molecules/Column";
import styles from "../../styles/TaskBoard.module.css";

const TaskBoard = () => {
    const columns = [
        { id: 0, title: 'To-Do' },
        { id: 1, title: 'In-progess' },
        { id: 2, title: 'In-Review' },
        { id: 3, title: 'Done' }
    ]
    return (<div className={styles.taskBoard}>
        {columns.map((col) => {
            return (<Column key={col.id} title={col.title} />)
        })}
    </div>)
}

export default TaskBoard;