import { render } from '@testing-library/react';
import {useState} from 'react';

const Head = () => {
  return (
    <div className='header'>
      <h1 className='logo'>bakePCSim 2022</h1>
    </div>
  );
};

export default Head;