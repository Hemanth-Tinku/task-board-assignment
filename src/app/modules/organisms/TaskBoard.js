"use client"

import Column from "../molecules/Column";
import styles from "../../styles/TaskBoard.module.css";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import TaskForm from "../molecules/TaskForm";
import TaskCard from "../molecules/TaskCard";

const TaskBoard = () => {
    const columns = [
        { id: 'to-do', title: 'To-Do' },
        { id: 'in-progress', title: 'In-progess' },
        { id: 'in-review', title: 'In-Review' },
        { id: 'done', title: 'Done' }
    ]

    const [isModalOpen, setIsModalOpen] = useState(false);

    let cachedTasks;
    // getting cached tasks
    if (typeof window !== "undefined") {
        cachedTasks = window.localStorage.getItem('tasks');
    }
    let initialTasks = {
        'to-do': [],
        'in-progress': [],
        'in-review': [],
        'done': []
    }
    if (cachedTasks) {
        initialTasks = JSON.parse(cachedTasks);
    }

    const [tasks, setTasks] = useState(initialTasks)

    // current editable task
    const [editTaskData, setEditTaskData] = useState(null);

    // common fn for both create and update
    const addTask = (task) => {
        // if we are modifiying existing task we delete and create a new one (simplifies handling columns-task data structure)
        if (!!editTaskData) {
            const indexToDelete = tasks[editTaskData?.status]?.findIndex((task) => task.id === editTaskData?.id);
            tasks[editTaskData?.status]?.splice(indexToDelete, 1);
        }
        const column = task.status;
        const newTask = {
            id: new Date().getTime(),
            title: task.title,
            description: task.description,
            status: column
        }

        setTasks((prevTasks) => ({
            ...prevTasks,
            [column]: [...prevTasks[column], newTask]
        }))

        setIsModalOpen(false);
        if (!!editTaskData) {
            setEditTaskData(null);
        }
    }

    const deleteTask = (task) => {
        const column = task.status;
        const deleteItemInd = tasks[column]?.findIndex((item) => task.id === item.id);

        if (deleteItemInd !== -1) {
            setTasks((prevTasks) => {
                const updatedTasks = {
                    ...prevTasks,
                    [column]: [
                        ...prevTasks[column].slice(0, deleteItemInd),
                        ...prevTasks[column].slice(deleteItemInd + 1),
                    ]
                };
                return updatedTasks;
            });
        }
    }

    const handleCreateTask = () => {
        setEditTaskData(null);
        setIsModalOpen(true);
    }

    const handleEditTask = (task) => {
        setEditTaskData(task);
        setIsModalOpen(true);
    }

    // cache any changes to tasks
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    }, [tasks])

    return (<div>
        <div className={styles.header}>
            <h1>Task Board</h1>
            <button className={styles.createTaskButton} onClick={handleCreateTask}>
                Create Task
            </button>
        </div>

        <div className={styles.taskBoard}>
            {columns.map((col) => {
                return (<Column key={col.id} title={col.title}>{
                    tasks[col.id].map(task => (
                        <TaskCard
                            key={task.title}
                            task={task}
                            onEdit={handleEditTask}
                            onDelete={deleteTask}
                        />
                    ))
                }</Column>)
            })}
        </div>

        <ReactModal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            className={styles.modalContent}
            overlayClassName={styles.modalOverlay}
        >
            <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>&times;</button>
            <h2>{!!editTaskData ? "Edit Task" : "Create a Task"}</h2>
            <TaskForm addTask={addTask} editTaskData={editTaskData} />
        </ReactModal>
    </div>)
}

export default TaskBoard;