import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import BlogSection from '../components/blogsection';
import Blog from '../models/Blog';
import { Timestamp } from '@firebase/firestore';
import User from '../models/User';

describe('BlogSection', () => {
  const mockBlogs: Blog[] = [
    {
      uid: '1',
      userEmail: 'unit-test',
      title: 'Blog 1',
      lead: 'Lead 1',
      imgUrl: 'image1.jpg',
      userId: 'user1',
      avgRating: 4,
      additional: 'unit-test',
      author: 'unit-test',
      category: 'unit-test',
      description: 'a unit test blog',
      duration: 'unit test',
      ingredients: [{ name: 'unit-test', amount: 'unit test' }],
      level: 'unit -test',
      quantity: 'unit test',
      tags: ['unit test'],
      timestamp: new Timestamp(0, 0)
    },
    {
      uid: '2',
      userEmail: 'unit-test',
      title: 'Blog 2',
      lead: 'Lead 2',
      imgUrl: 'image2.jpg',
      userId: 'user2',
      avgRating: 3,
      additional: 'unit-test',
      author: 'unit-test',
      category: 'unit-test',
      description: 'a unit test blog',
      duration: 'unit test',
      ingredients: [{ name: 'unit-test', amount: 'unit test' }],
      level: 'unit -test',
      quantity: 'unit test',
      tags: ['unit test'],
      timestamp: new Timestamp(0, 0)
    }
  ];

  const mockUser: User = { uid: 'user1', displayName: 'unit-test', email: 'unit-test' };

  const mockHandleDelete = jest.fn();

  it('should render blogs correctly', () => {
    render(
      <BrowserRouter>
        <BlogSection blogs={mockBlogs} />
      </BrowserRouter>
    );

    expect(screen.getByText('Blog 1')).toBeInTheDocument();
    expect(screen.getByText('Blog 2')).toBeInTheDocument();
  });

  it('should show edit and delete icons for authorized user', () => {
    render(
      <BrowserRouter>
        <BlogSection blogs={mockBlogs} user={mockUser} handleDelete={mockHandleDelete} />
      </BrowserRouter>
    );

    expect(screen.getAllByLabelText('Rezept bearbeiten')).toHaveLength(1);
    expect(screen.getAllByLabelText('Rezept löschen')).toHaveLength(1);
  });

  it('should not show edit and delete icons for unauthorized user', () => {
    render(
      <BrowserRouter>
        <BlogSection blogs={mockBlogs} handleDelete={mockHandleDelete} />
      </BrowserRouter>
    );

    expect(screen.queryByLabelText('Rezept bearbeiten')).toBeNull();
    expect(screen.queryByLabelText('Rezept löschen')).toBeNull();
  });

});
