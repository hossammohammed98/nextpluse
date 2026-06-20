import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsPage from './page';

describe('NewsPage Component', () => {
  test('renders the main heading "Latest News"', () => {
    render(<NewsPage />);

    const heading = screen.getByRole('heading', {
      name: /Latest News/i,
      level: 1,
    });

    expect(heading).toBeInTheDocument();
  });

  test('renders all hardcoded news articles correctly', () => {
    render(<NewsPage />);

    expect(
      screen.getByText(/5 Quick Tricks to Prevent Chicken Breast/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Top 10 Healthy Foods to Boost Your Energy/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Creative Ways to Present Food Like a Professional Chef/i)
    ).toBeInTheDocument();

    expect(screen.getByText('Tips')).toBeInTheDocument();
    expect(screen.getByText('Health')).toBeInTheDocument();
    expect(screen.getByText('Cooking')).toBeInTheDocument();
  });

  test('contains correct navigation links for each article', () => {
    render(<NewsPage />);

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(3);

    expect(links[0]).toHaveAttribute('href', '/news/1');
    expect(links[1]).toHaveAttribute('href', '/news/2');
    expect(links[2]).toHaveAttribute('href', '/news/3');
  });
});