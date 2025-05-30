import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

import styles from './Task.module.css';

interface TaskProps {
  id: number;
  title: string;
  completed: boolean;
  created: Date;
  onDelete: () => void;
  onCompletion: () => void;
  onUpdate: (newTitle: string) => void;
}

const Task: React.FC<TaskProps> = ({ title = '', completed = false, created, onDelete, onCompletion, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);

  const createdTime = formatDistanceToNow(new Date(created), {
    addSuffix: true,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTitle(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onUpdate(currentTitle);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      onUpdate(currentTitle);
    }
  };

  return (
    <li className={`${styles.li_item} ${completed ? styles.completed : ''} ${isEditing ? styles.editing : ''}`}>
      <div className={styles.view}>
        <input className={styles.toggle} type="checkbox" checked={completed} onChange={onCompletion} />
        <label>
          <span className={styles.title}>{title}</span>
          <span className={styles.description}>created {createdTime}</span>
        </label>
        <button className={`${styles.icon} ${styles.icon_edit}`} onClick={handleEditClick}></button>
        <button className={`${styles.icon} ${styles.icon_destroy}`} onClick={onDelete}></button>
      </div>
      {isEditing && (
        <input
          type="text"
          className={styles.edit}
          value={currentTitle}
          onChange={handleTitleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      )}
    </li>
  );
};

export default Task;
