import { render, screen, fireEvent } from '@testing-library/react';

import UserDetailsForm from './2-UserDetailsForm';

/**
 * UserDetailsForm is a component that has some user interaction so is a little more complex.
 *
 * A nice way of thinking about what to test is to look at the steps the user can take when they interact with this component. So:
 * - Read the current information (check that this is correct based on the prop)
 * - Change a field (check that the changes are applied in the UI)
 * - Click on the Submit button (check that the fields are sent to the function)
 */

const testUser = {
  firstName: 'John',
  lastName: 'Doe',
  role: 'Admin',
};
const changedUser = {
  firstName: 'Mary',
  lastName: 'Williams',
  role: 'User',
};

describe('UserDetailsForm', () => {
  it('Correctly fills in the initial values', () => {
    render(<UserDetailsForm {...testUser} />);
    const inputFields = screen.getAllByRole('textbox');

    expect(inputFields[0]).toHaveValue(testUser.firstName);
    expect(inputFields[1]).toHaveValue(testUser.lastName);
    expect(inputFields[2]).toHaveValue(testUser.role);
  });

  it('Correctly changes a fields value', () => {
    render(<UserDetailsForm {...changedUser} />);

    const inputFirstName = screen.getByRole('textbox', {
      name: 'First name:',
    });
    fireEvent.change(inputFirstName, {
      target: { value: changedUser.firstName },
    });
    expect(inputFirstName).toHaveValue(changedUser.firstName);

    const inputLastName = screen.getByRole('textbox', {
      name: 'Last name:',
    });
    fireEvent.change(inputLastName, {
      target: { value: changedUser.lastName },
    });
    expect(inputLastName).toHaveValue(changedUser.lastName);

    const inputRole = screen.getByRole('textbox', { name: 'Role:' });
    fireEvent.change(inputRole, {
      target: { value: changedUser.role },
    });
    expect(inputRole).toHaveValue(changedUser.role);
  });

  it('Submits the right values to the onSubmit function', () => {
    const mockSubmit = jest.fn();

    render(<UserDetailsForm {...testUser} onSubmit={mockSubmit} />);
    const inputFirstName = screen.getByLabelText('First name:');
    const inputLastName = screen.getByLabelText('Last name:');
    const inputRole = screen.getByLabelText('Role:');

    fireEvent.change(inputFirstName, {
      target: { value: changedUser.firstName },
    });
    fireEvent.change(inputLastName, {
      target: { value: changedUser.lastName },
    });
    fireEvent.change(inputRole, {
      target: { value: changedUser.role },
    });

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledWith(changedUser);
  });
});
