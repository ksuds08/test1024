import React from 'react';
import { User } from '../types';

interface MyComponentProps {
  user: User;
}

const MyComponent: React.FC<MyComponentProps> = ({ user }) => {
  return (
    <div className="p-4 bg-blue-100 rounded shadow-lg">
      <h1 className="text-xl font-bold">Welcome, {user.name}!</h1>
      <p className="text-gray-700">Your email: {user.email}</p>
    </div>
  );
};

export default MyComponent;
