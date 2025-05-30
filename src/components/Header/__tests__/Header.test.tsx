import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  test('добавляет задачу при отправке формы', () => {
    const mockAddTask = jest.fn();
    const { container } = render(<Header onAddTask={mockAddTask} />);

    const input = screen.getByPlaceholderText(/task/i);
    fireEvent.change(input, { target: { value: 'Новое дело' } });

    const form = container.querySelector('form');
    fireEvent.submit(form!);

    expect(mockAddTask).toHaveBeenCalledWith('Новое дело');
  });
});
