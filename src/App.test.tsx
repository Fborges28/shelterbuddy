import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Check the APP UI data', () => {
  it('renders shelter buddy logo', () => {
    render(<App />);
    const logoElement = screen.getByAltText(/Shelter Buddy logo/i);
    expect(logoElement).toBeInTheDocument();
  });
});


