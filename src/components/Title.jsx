import React from 'react';
import '../App.css';

const Title = ({ frontalTitle, backgroundTitle }) => {
  return (
    <div className='Titles'>
      <h1 className='BackgroundTitle'>{backgroundTitle.toUpperCase()}</h1>
      <h2 className='FrontalTitle'>{frontalTitle}</h2>
    </div>
  );
};

export default Title;
