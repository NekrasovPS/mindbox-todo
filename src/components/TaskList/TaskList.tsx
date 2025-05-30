import React from 'react';
import Task from '../Task/Task';
import styles from './TaskList.module.css';

interface TaskType {
  id: number;
  title: string;
  completed: boolean;
  created: Date;
}

interface TaskListProps {
  tasks: TaskType[];
  onDeleteTask: (id: number) => void;
  onTaskCompletion: (id: number) => void;
  onUpdateTask: (id: number, newTitle: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks = [], onDeleteTask, onTaskCompletion, onUpdateTask }) => {
  return (
    <ul className={styles.todo_list}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          created={task.created}
          onDelete={() => onDeleteTask(task.id)}
          onCompletion={() => onTaskCompletion(task.id)}
          onUpdate={(newTitle: string) => onUpdateTask(task.id, newTitle)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
