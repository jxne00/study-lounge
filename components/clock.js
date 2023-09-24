'use client'; // set component as client only
import React, { useState, useEffect } from 'react';

/**
 * @description displays the current locale date and time
 */
const Clock = () => {
  const [date, setDate] = useState(new Date());
  const [showColon, setShowColon] = useState(true);

  useEffect(() => {
    // update time
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  // 12hr format
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return (
    <div className='bg-black text-white p-4 rounded-lg w-max'>
      <div className='text-sm mb-2'>{date.toLocaleDateString()}</div>
      <div className='font-mono text-4xl'>
        {hours}
        <span className={showColon ? 'opacity-100' : 'opacity-0'}>:</span>
        {minutes}
      </div>
    </div>
  );
};

export default Clock;
