import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Task from '../Task';

describe('Task component', () => {
  const baseProps = {
    id: 1,
    title: 'Test Task',
    completed: false,
    created: new Date(),
    onDelete: jest.fn(),
    onCompletion: jest.fn(),
    onUpdate: jest.fn(),
  };

  test('отображает название и дату', () => {
    render(<Task {...baseProps} />);
    expect(screen.getByText(/Test Task/i)).toBeInTheDocument();
    expect(screen.getByText(/created/i)).toBeInTheDocument();
  });

  test('переключает чекбокс и вызывает onCompletion', () => {
    render(<Task {...baseProps} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(baseProps.onCompletion).toHaveBeenCalled();
  });

  test('удаляет задачу при клике по иконке удаления', () => {
    render(<Task {...baseProps} />);
    const deleteButton = screen.getAllByRole('button')[1];
    fireEvent.click(deleteButton);
    expect(baseProps.onDelete).toHaveBeenCalled();
  });
});
