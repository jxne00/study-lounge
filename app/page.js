'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { getRandomBackground } from '@/utils/themes';
import '../styles/mystyles.css';

import Button from '@mui/material/Button';
import StartRoundedIcon from '@mui/icons-material/StartRounded';

// dynamically import clock component
const Clock = dynamic(() => import('../components/clock'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

// dynamically import notes component
const Notes = dynamic(() => import('../components/notes'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

// dynamically import todo component
const Todo = dynamic(() => import('../components/todo'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

// dynamically import timer component
const Timer = dynamic(() => import('../components/timer'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const [featureVisible, setFeatureVisible] = useState({
    todo: true,
    timer: true,
    notes: true,
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(getRandomBackground());

  useEffect(() => {
    document.body.style.setProperty(
      '--background-image',
      `url(${backgroundImage})`
    );
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.height = '100vh';

    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.height = '';
    };
  }, [backgroundImage]);

  // set feature visibility
  const toggleFeature = (feature) => {
    setFeatureVisible((prevState) => ({
      ...prevState,
      [feature]: !prevState[feature],
    }));
  };

  return (
    <main className='min-h-screen p-4 md:p-8 lg:p-24 flex flex-col md:relative'>
      <button onClick={() => setBackgroundImage(getRandomBackground())}>
        Change Theme
      </button>

      <div className='my-4 md:absolute md:top-0 md:left-0 md:ml-4 md:mt-4 md:mb-0'>
        <Clock />
        {featureVisible.todo && <Todo />}
      </div>

      <div className='my-4 md:absolute md:top-1/4 md:left-1/2 md:transform md:-translate-x-1/2 md:top-1/5'>
        {featureVisible.timer && <Timer />}
      </div>

      <div className='my-4 md:absolute md:bottom-0 md:right-0 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3'>
        {featureVisible.notes && <Notes />}
      </div>

      {/* sidebar that can be expended */}
      <div
        className={sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}
        onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? (
          <div className='p-4 text-white'>
            <h1 className='text-2xl font-bold'>Settings</h1>
            <hr className='my-2' />
            <p className='text-sm text-gray-400'>un-check to hide</p>

            <div onClick={(e) => e.stopPropagation()} className='flex flex-col'>
              <label className='my-2 flex items-center'>
                <input
                  type='checkbox'
                  className='mr-2'
                  checked={featureVisible.todo}
                  onChange={() => toggleFeature('todo')}
                />
                Todo
              </label>

              <label className='my-2 flex items-center'>
                <input
                  type='checkbox'
                  className='mr-2'
                  checked={featureVisible.timer}
                  onChange={() => toggleFeature('timer')}
                />
                Timer
              </label>

              <label className='my-2 flex items-center'>
                <input
                  type='checkbox'
                  className='mr-2'
                  checked={featureVisible.notes}
                  onChange={() => toggleFeature('notes')}
                />
                Notes
              </label>
            </div>
          </div>
        ) : (
          <div>
            <Button variant='contained' className='bg-slate-400 text-white'>
              <StartRoundedIcon />
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
