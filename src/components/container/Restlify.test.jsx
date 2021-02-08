/* eslint-disable no-undef */
/* eslint-disable max-len */
global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Restlify from './Restlify';
describe('Restlify container', () => {
  it('tests Restlify input', () => {
    render(<Restlify />);
    const urlInput = screen.getByPlaceholderText('URL');
    userEvent.type(urlInput, 'https://jsonplaceholder.typicode.com/todos/1');
    const getInput = screen.getByLabelText('GET');
    userEvent.click(getInput);
    userEvent.click(screen.getByText('Call'));
    return waitFor(() => {
      expect(screen.getByText('{"userId":1,"id":1,"title":"delectus aut autem","completed":false}')).toHaveTextContent('{"userId":1,"id":1,"title":"delectus aut autem","completed":false}');
    });
  });
});
