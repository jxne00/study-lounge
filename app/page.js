'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

import '../styles/mystyles.css';
import Sidebar from '@/components/sidebar';

// dynamically import clock component
const Clock = dynamic(() => import('../components/clock'), {
  ssr: false,
});

// dynamically import notes component
const Notes = dynamic(() => import('../components/notes'), {
  ssr: false,
});

// dynamically import todo component
const Todo = dynamic(() => import('../components/todo'), {
  ssr: false,
});

// dynamically import timer component
const Timer = dynamic(() => import('../components/timer'), {
  ssr: false,
});

function Index() {
  // true: show feature, false: hide feature
  const [featureVisible, setFeatureVisible] = useState({
    todo: true,
    timer: true,
    notes: true,
  });
  const [bgImg, setBgImg] = useState(1); // store index of image to use

  // css classes that each sets a diff bg image
  const imgClasses = ['bg-img', 'bg-img2', 'bg-img3', 'bg-img4', 'bg-img5'];

  // set a class for the background image
  const changeBackground = () => {
    setBgImg((prevIndex) => (prevIndex + 1) % imgClasses.length);
  };

  const currBg = imgClasses[bgImg];

  return (
    <main
      className={`min-h-screen p-4 md:p-8 lg:p-24 flex flex-col md:relative ${currBg}`}>
      <p className='text-white text-center text-2xl font-bold'>study lounge</p>

      <div className='my-4 md:absolute md:top-0 md:left-0 md:ml-4 md:mt-4 md:mb-0'>
        <Clock />

        {/* add empty space */}
        <div className='h-4'></div>

        {featureVisible.todo && <Todo />}
      </div>

      <div className='my-4 md:absolute md:top-1/4 md:left-1/2 md:transform md:-translate-x-1/2 md:top-1/5'>
        {featureVisible.timer && <Timer />}
      </div>

      <div className='my-4 md:absolute md:bottom-0 md:right-0 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3'>
        {featureVisible.notes && <Notes />}
      </div>

      {/* sidebar that can be expended */}
      <Sidebar
        featureVisible={featureVisible}
        setFeatureVisible={setFeatureVisible}
        changeBackground={changeBackground}
      />
    </main>
  );
}

export default Index;
