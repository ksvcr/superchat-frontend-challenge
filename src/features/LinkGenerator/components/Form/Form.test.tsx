import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';

import { Form } from './Form';
import { RepositoryParams } from 'shared/types';

const mockOnSubmit = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

describe('when the submit button is clicked with valid values', () => {
  const formData: RepositoryParams = {
    name: 'react',
    owner: 'facebook',
    color: '#9dc1fb',
    icon: 'pumpkin'
  };

  it('should call the onSubmit function', async () => {
    render(<Form onSubmit={mockOnSubmit} />);

    const ownerInput = screen.getByLabelText(new RegExp('Owner'));
    const nameInput = screen.getByLabelText(new RegExp('Repository name'));

    await userEvent.clear(ownerInput);
    await userEvent.type(ownerInput, 'facebook');

    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'react');

    await userEvent.click(screen.getByRole('button'));
    expect(mockOnSubmit).toHaveBeenCalledWith(formData);
  });
});

describe('when the submit button is clicked with empty values', () => {
  it('should not call the onSubmit function', async () => {
    render(<Form onSubmit={mockOnSubmit} />);

    await userEvent.click(screen.getByRole('button'));
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});

describe('when rendered with isLoading', () => {
  it('should disable submit button', async () => {
    render(<Form onSubmit={mockOnSubmit} loading={true} />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('disabled');
  });
});
