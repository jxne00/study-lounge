'use client';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

// a pomodoro timer
const Timer = () => {
  const [timeInSeconds, setTimeInSeconds] = useState(1500); // 25mins (pomodoro technique)
  const [isActive, setIsActive] = useState(false);

  // start countdown when isActive is true
  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTimeInSeconds((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isActive && timeInSeconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timeInSeconds]);

  // set timer status to active or inactive
  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  // reset timer to 25mins
  const resetTimer = () => {
    setIsActive(false);
    setTimeInSeconds(1500);
  };

  // format time to mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`;
  };

  return (
    <div className='text-center border p-8'>
      <div className='text-4xl mb-4'>{formatTime(timeInSeconds)}</div>

      <Button
        variant='contained'
        endIcon={isActive ? <PauseIcon /> : <PlayArrowIcon />}
        onClick={toggleTimer}
        className='bg-blue-500 text-white rounded'
        style={{ marginRight: '10px' }}>
        {isActive ? 'Pause' : 'Start'}
      </Button>

      <Button
        variant='contained'
        endIcon={<RestartAltIcon />}
        onClick={resetTimer}
        className='bg-red-500 text-white rounded'>
        Reset
      </Button>
    </div>
  );
};

export default Timer;
