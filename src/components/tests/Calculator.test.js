import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../calculator';

describe('Calculator component', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the result of arithmetic operations', () => {
    const { getByText, queryAllByText } = render(<Calculator />);

    // Simulate button clicks to perform calculations
    userEvent.click(getByText('1'));
    userEvent.click(getByText('+'));
    userEvent.click(getByText('2'));
    userEvent.click(getByText('='));

    // Check if the result is displayed correctly
    const resultElement = queryAllByText('3', { selector: '.operation' });
    expect(resultElement).toHaveLength(1); // Ensure there's only one element with the text "3"
  });
});
