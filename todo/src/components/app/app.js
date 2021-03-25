import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

const App = () => {

  const todoData = [
    {label: 'Wake Up', important: false, id: 1},
    {label: 'Learn React', important: true, id: 2},
    {label: 'Build APP', important: false, id: 3},
    {label: 'Have a Lunch', important: true, id: 4}
  ];

  return (
    <div className='container'>
    <AppHeader />
    <SearchPanel />
    <TodoList todos={todoData} />
  </div>
  );
}

export default App;