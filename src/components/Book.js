import React from 'react'

const Book = ({ title, author, description, children }) => {
  return (
    <div className='card'>
      <h1>{title}</h1>
      <p>{author}</p>
      {/* Conditionally render the description if it exists */}
      {description && <p className='card-item'>Description: {description}</p>}
      {children}
    </div>
  );
};

export default Book