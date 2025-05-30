import React, { useState } from 'react';

import styles from './Header.module.css';

interface HeaderProps {
  onAddTask: (title: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clickEnter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim() !== '') {
      onAddTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <header className={styles.header}>
      <h1>todos</h1>
      <form className={styles.new_todo_form} onSubmit={clickEnter}>
        <input className={styles.new_todo} placeholder="Task" autoFocus value={inputValue} onChange={inputChange} />
        <button type="submit" style={{ display: 'none' }}></button>
      </form>
    </header>
  );
};

export default Header;
