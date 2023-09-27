import React, { useState } from 'react';
import Button from '@mui/material/Button';
import StartRoundedIcon from '@mui/icons-material/StartRounded';
import RefreshIcon from '@mui/icons-material/Refresh';

import Footer from './footer';

const Sidebar = (props) => {
  const { featureVisible, setFeatureVisible, changeBackground } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // set visibility of each feature
  const toggleFeature = (feature) => {
    setFeatureVisible((prevState) => ({
      ...prevState,
      [feature]: !prevState[feature],
    }));
  };

  return (
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

            <label className='my-2 flex items-center'>
              <Button
                variant='contained'
                className='bg-slate-400 text-white'
                onClick={changeBackground}>
                <RefreshIcon />
              </Button>
              change background
            </label>
          </div>
          <Footer />
        </div>
      ) : (
        <div>
          <Button variant='contained' className='bg-slate-400 mr-2 text-white'>
            <StartRoundedIcon />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
