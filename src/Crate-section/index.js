import { render } from '@testing-library/react';
import {useState} from 'react';
import Head from '../Header';



const PartPicker = () => {
  const [num, setNum] = useState(0);
  const [cash, setCash] = useState(1000);
  
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    if(cash > 120){
    setNum(randomNumberInRange(0, 16));
    setCash(cash - 120)
    }
    else {
      alert('No more money. Sell some of your items or wait till tomorrow to open crates again!')
    }
  };



  return (
    <div className='opendiv'>
      <h1 className='cash'>Balance: ${cash}</h1>
      <img src={require(`/src/content/${num}.png`)}></img><br></br>
      <button className='button' onClick={handleClick}>Open</button>
    </div>
  );
};

export default PartPicker;