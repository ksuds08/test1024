import React from 'react';

/**
 * MyComponent - Displays user information
 *
 * @param {Object} props - Component props
 * @param {string} props.userName - The name of the user
 * @param {number} props.userId - The ID of the user
 * @throws {Error} Will throw an error if userId is invalid
 */
const MyComponent: React.FC<{ userName: string; userId: number }> = React.memo(({ userName, userId }) => {
  // Validate inputs
  if (!userName) {
    throw new Error('Invalid userName: cannot be empty');
  }
  if (userId <= 0) {
    throw new Error('Invalid userId: must be a positive number');
  }

  return (
    <div className='p-4 border rounded shadow-lg' aria-live='polite'>
      <h2 className='text-lg font-bold' aria-label={`User: ${userName}`}>User: {userName}</h2>
      <p className='text-sm' aria-label={`ID: ${userId}`}>ID: {userId}</p>
    </div>
  );
});

export default MyComponent;
