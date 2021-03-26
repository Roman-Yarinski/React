import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, important = false, done = false, onDeleted, onLabelClick, onImportantClick}) => {

  const statusImportant = important ? 'important' : '';
  const statusDone = done ? 'done' : '';
  
  return (
  <span  className={`todo-list-item ${statusImportant} ${statusDone}`}>

    <span className='todo-list-item-label' 
    onClick={ onLabelClick }> 
      { label } 
    </span>

    <div>
      <button type='button' className='btn btn-outline-success btn-sm' 
      onClick={ onImportantClick }>
        <i className='fa fa-exclamation' />
      </button>

      <button type='button' className='btn btn-outline-danger btn-sm' 
      onClick={ onDeleted }>
        <i className='fa fa-trash-o' />
      </button>
    </div>

  </span>
  );
}

export default TodoListItem;
