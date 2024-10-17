"use client";

import { useState } from "react"
import styles from "../../styles/TaskBoard.module.css";

const TaskForm = ({ addTask, editTaskData }) => {
    const [task, setTask] = useState({
        title: editTaskData?.title ?? '',
        description: editTaskData?.description ?? '',
        status: editTaskData?.status ?? 'to-do'
    })
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask(task);
    }
    return (<form onSubmit={handleFormSubmit} className={styles.createTaskForm}>
        <div>
            <label htmlFor="taskTitle" className={styles.inputLabel}>Title:</label>
            <input
                id="taskTitle"
                type="text"
                placeholder="Enter task title"
                value={task.title}
                onChange={(e) => setTask((prevTask) => ({
                    ...prevTask,
                    title: e.target.value
                }))}
                className={styles.inputField}
                required
            />
        </div>
        <div>
            <label htmlFor="taskDescription" className={styles.inputLabel}>Description (optional):</label>
            <textarea
                id="taskDescription"
                value={task.description}
                onChange={(e) => setTask((prevTask) => ({
                    ...prevTask,
                    description: e.target.value
                }))}
                rows="5"
                cols="40"
                placeholder="Enter task description"
                className={styles.inputField}
            />
        </div>
        <div>
            <label htmlFor="taskStatus" className={styles.inputLabel}>Select Status:</label>
            <select id="taskStatus" className={styles.selectField} value={task.status} onChange={(e) => setTask((prevTask) => ({
                ...prevTask,
                status: e.target.value
            }))}>
                <option value={'to-do'}>To-Do</option>
                <option value={'in-progress'}>In-progress</option>
                <option value={'in-review'}>In-review</option>
                <option value={'done'}>Done</option>
            </select>
        </div>
        <button type="submit" className={styles.submitButton}>
            {!!editTaskData ? "Update Task" : "Add Task"}
        </button>
    </form>)
}

export default TaskForm;