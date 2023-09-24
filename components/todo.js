'use client';
import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';

import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // get tasks from local storage
  useEffect(() => {
    const savedTasks = localStorage.getItem('mytasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // update local storage when tasks change
  useEffect(() => {
    localStorage.setItem('mytasks', JSON.stringify(tasks));
  }, [tasks]);

  // add task to list
  const addTask = () => {
    // only add if input in not empty
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  // mark task as completed or not
  const toggleCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // set icon based on completion status
  const setToggleIcon = (index) => {
    const newTasks = [...tasks];
    if (newTasks[index].completed) {
      return <ClearOutlinedIcon />;
    }
    return <CheckCircleOutlineOutlinedIcon />;
  };

  // remove task from list
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className='w-full max-w-lg p-4 border rounded-lg bg-slate-200'>
      <h2 className='text-xl font-bold mb-4 text-black'>Todo list</h2>
      <div className='flex mb-4'>
        {/* task input */}
        <input
          className='flex-grow p-2 border rounded-l-md text-black'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Add a new task...'
        />

        {/* add task button */}
        <Button
          variant='outlined'
          color='secondary'
          value={inputValue}
          onClick={addTask}>
          Add
        </Button>
      </div>

      {/* list of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className='flex items-center justify-between mb-2'>
            {/* strikethrough completed tasks */}
            <span
              className={
                task.completed ? 'line-through text-gray-500' : 'text-black'
              }>
              {task.text}
            </span>

            {/* actions - completed, remove */}
            <div>
              <button
                className='text-green-900 p-2'
                onClick={() => toggleCompletion(index)}>
                {setToggleIcon(index)}
              </button>
              <button
                className='text-red-900 p-2'
                onClick={() => removeTask(index)}>
                <DeleteForeverOutlinedIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
