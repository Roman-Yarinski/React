import React from 'react';
import './app-header.css';

const AppHeader = ({todo, done}) => {
  return (
  <div className='app-header d-flex'>
  <h1 className='app-header'>My Todo</h1>
  <h2 className='app-header'>{todo} more to do, {done} done</h2>
  </div>
  )
}

export default AppHeader;
