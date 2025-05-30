import React from 'react';

import { render, screen } from '@testing-library/react';
import TaskList from '../TaskList';

const tasks = [
  { id: 1, title: 'Task 1', completed: false, created: new Date() },
  { id: 2, title: 'Task 2', completed: true, created: new Date() },
];

describe('TaskList', () => {
  test('рендерит список задач', () => {
    render(<TaskList tasks={tasks} onDeleteTask={jest.fn()} onTaskCompletion={jest.fn()} onUpdateTask={jest.fn()} />);
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });
});
