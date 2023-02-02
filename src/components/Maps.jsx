import React, { useState } from 'react';
import '../App.css';
import { TfiArrowRight, TfiArrowLeft } from 'react-icons/tfi';
import { maps } from '../data/data';

let idx = 0;

const Maps = () => {
  const [currentPlace, setCurrentPlace] = useState(maps[idx]);

  const handleChangeMap = (e) => {
    console.log(idx);
    if (e.target.id === 'next') {
      idx++;
    } else {
      idx--;
    }
    if (idx === maps.length) {
      idx = 0;
    } else if (idx === -1) {
      idx = 4;
    }

    setCurrentPlace(maps[idx]);
  };
  return (
    <>
      <h2 className='placesLived'>Places I've Lived</h2>
      <div className='mapsContainer'>
        <TfiArrowLeft id='prev' onClick={handleChangeMap} />
        <iframe src={currentPlace.url} title='La Paz'></iframe>
        <img className='countryImg' alt='country' src={currentPlace.url && currentPlace.img}></img>
        <TfiArrowRight id='next' onClick={handleChangeMap} />
      </div>
      <h2 className='city'>{currentPlace.place}</h2>
    </>
  );
};

export default Maps;
