'use client'; // set component as client only
import React, { useState, useEffect } from 'react';

// a textarea that saves content to local storage
const Notes = () => {
  const [notes, setNotes] = useState('');

  useEffect(() => {
    // get saved notes from local storage
    const savedNotes = localStorage.getItem('mynotes');
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    // save notes on textarea change
    localStorage.setItem('mynotes', notes);
  }, [notes]);

  return (
    <textarea
      className='w-full max-w-lg h-40 p-4 border-0 rounded-md resize-none md:h-64 lg:h-96 text-sm md:text-base font-mono text-black bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
      value={notes}
      onChange={(txt) => setNotes(txt.target.value)}
      placeholder='You can type your notes here...'
    />
  );
};

export default Notes;
