import React from 'react';
import TaskFilter from '../TaskFilter/TaskFilter';

import styles from './Footer.module.css';

interface FooterProps {
  onDeletedAllTask: () => void;
  currentFilter: 'All' | 'Active' | 'Completed';
  onFilterChange: (filter: 'All' | 'Active' | 'Completed') => void;
  tasksLeft: number;
}

const Footer: React.FC<FooterProps> = ({ onDeletedAllTask, currentFilter, onFilterChange, tasksLeft }) => {
  return (
    <footer className={styles.footer}>
      <span className={styles.todo_count}>{tasksLeft} items left</span>{' '}
      <TaskFilter
        currentFilter={currentFilter}
        onFilterChange={onFilterChange}
        onDeletedAllTask={function (): void {
          throw new Error('Function not implemented.');
        }}
        tasksLeft={0}
      />
      <button className={styles.clear_completed} onClick={onDeletedAllTask}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
