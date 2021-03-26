import React from 'react';
import TodoListItem from '../todo-list-item'
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onLabelClick, onImportantClick }) => {

  const elements = todos.map((e) => {
    const {id, ...eProps} =e;
    return (
      <li key={id} className="list-group-item"> 
        <TodoListItem {...eProps} 
        onDeleted={() => onDeleted(id)} 
        onLabelClick={() => {onLabelClick(id)}} 
        onImportantClick={()=> {onImportantClick(id)}} 
        /> 
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
}

export default TodoList;
