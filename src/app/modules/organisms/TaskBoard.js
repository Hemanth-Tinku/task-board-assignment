"use client"

import Column from "../molecules/Column";
import styles from "../../styles/TaskBoard.module.css";
import { useState } from "react";
import ReactModal from "react-modal";
import CreateTaskForm from "../molecules/CreateTaskForm";

const TaskBoard = () => {
    const columns = [
        { id: 'to-do', title: 'To-Do' },
        { id: 'in-progress', title: 'In-progess' },
        { id: 'in-review', title: 'In-Review' },
        { id: 'done', title: 'Done' }
    ]
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const [tasks, setTasks] = useState({
        'to-do': [],
        'in-progress': [],
        'in-review': [],
        'done': []
    })

    const createTask = (task) => {
        const newTask = {
            title: task.title,
            description: task.description
        }
        const column = task.status;
        setTasks((prevTasks) => ({
            ...prevTasks,
            [column]: [...prevTasks[column], newTask]
        }))

        setIsCreateModalOpen(false);
    }
    return (<div className={styles.taskBoard}>
        <button className={styles.createTaskButton} onClick={() => setIsCreateModalOpen(true)}>
            Create Task
        </button>

        {columns.map((col) => {
            return (<Column key={col.id} title={col.title} tasks={tasks[col.id]} />)
        })}

        <ReactModal
            isOpen={isCreateModalOpen}
            onRequestClose={() => setIsCreateModalOpen(false)}
            className={styles.modalContent}
            overlayClassName={styles.modalOverlay}
        >
            <button className={styles.closeButton} onClick={() => setIsCreateModalOpen(false)}>&times;</button>
            <h2>Create a Task</h2>
            <CreateTaskForm createTask={createTask} />
        </ReactModal>
    </div>)
}

export default TaskBoard;