import React, { useState } from 'react';

import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';

import styles from './App.module.css';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  created: Date;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'All' | 'Active' | 'Completed'>('All');

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      created: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number): void => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const deletedAllTask = (): void => {
    setTasks([]);
  };

  const taskCompletion = (id: number): void => {
    const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));
    setTasks(updatedTasks);
  };

  const updateTaskTitle = (id: number, newTitle: string): void => {
    const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, title: newTitle } : task));
    setTasks(updatedTasks);
  };

  const getFilteredTasks = (): Task[] => {
    switch (filter) {
      case 'Active':
        return tasks.filter((task) => !task.completed);
      case 'Completed':
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  return (
    <section className={styles.todo_app}>
      <Header onAddTask={addTask} />
      <section className={styles.main}>
        <TaskList
          onDeleteTask={deleteTask}
          onTaskCompletion={taskCompletion}
          onUpdateTask={updateTaskTitle}
          tasks={getFilteredTasks()}
        />
        <Footer
          onDeletedAllTask={deletedAllTask}
          currentFilter={filter}
          onFilterChange={setFilter}
          tasksLeft={tasks.filter((task) => !task.completed).length}
        />
      </section>
    </section>
  );
};

export default App;
