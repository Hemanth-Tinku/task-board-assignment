"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from "../../styles/Column.module.css";

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div className={styles.taskCard}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className={styles.taskCardActions}>
        <FontAwesomeIcon 
          icon={faEdit} 
          onClick={() => onEdit(task)} 
          className={`${styles.taskIcon} ${styles.editIcon}`}
          title="Edit Task"
        />
        <FontAwesomeIcon 
          icon={faTrash} 
          size='12px'
          onClick={() => onDelete(task)} 
          className={`${styles.taskIcon} ${styles.deleteIcon}`}
          title="Delete Task"
        />
      </div>
    </div>
  );
};

export default TaskCard;
