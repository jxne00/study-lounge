'use client';
import React, { useState, useEffect } from 'react';

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
      <button
        onClick={toggleTimer}
        className='mx-2 py-2 px-4 bg-blue-500 text-white rounded'>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button
        onClick={resetTimer}
        className='mx-2 py-2 px-4 bg-red-500 text-white rounded'>
        Reset
      </button>
    </div>
  );
};

export default Timer;
