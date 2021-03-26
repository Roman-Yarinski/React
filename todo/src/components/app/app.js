import React, {useState} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

const App = () => {

  const todoData = [
    {label: 'Wake Up', important: false, done: true, id: 1},
    {label: 'Learn React', important: true, done: false, id: 2},
    {label: 'Have a nice Day', important: false, done: false, id: 3},
    {label: 'Build APP', important: false, done: false, id: 4},
    {label: 'Have a Lunch', important: true, done: true, id: 5}
  ];

  const [state, setState] = useState({todoData, filter: 'all'});

  const onDeleted = (id) => {
    setState( ({todoData}) => {
      return {...state, todoData: todoData.filter((e)=>e.id !== id) }; 
    });
  }

  const onImportantClick = (id) => {
    setState( ({todoData}) => {
      const newTodo = todoData.map(e => {
        let res = e;
        if(e.id === id) {
          res = {...e, important: !e.important};
        }
        return res;
      });
      return {...state, todoData: newTodo}; 
    });
  }

  const onLabelClick = (id) => {
    setState( ({todoData}) => {
      const newTodo = todoData.map(e => {
        let res = e;
        if(e.id === id) {
          res = {...e, done: !e.done};
        }
        return res;
      });
      return {...state, todoData: newTodo}; 
    });
  }

  const onSort = (param) => {
    let res;
      switch (param) {
        case 'active':
          res = state.todoData.filter((e)=>!e.done)
          break;

        case 'done':
          res = state.todoData.filter((e)=>e.done)
          break;

        default:
          res = state.todoData;
          break;
      }
      return res;
  }

  const onSortAll = () => {
    setState({ ...state, filter: 'all' });
  }

  const onSortActive = () => {
    setState({ ...state, filter: 'active' });
  }

  const onSortDone = () => {
    setState({ ...state, filter: 'done' });
  }

  const onItemAdded = (e) =>{
    if(e) {
      e.preventDefault();
    }

    let text = document.querySelector('.search-input').value;
    text = text.replace(/\s+/g, ' ').trim();
    
    if(text) {
      setState( ({todoData}) => {
        let newTodo = [...todoData];
        newTodo.push({label: text, important: false, done: false, id: todoData.length + 1});
        document.querySelector('.search-input').value = '';
        return {...state, todoData: newTodo};
      });
    }
  }

  const done = state.todoData.filter((e)=>e.done).length;
  const todo = state.todoData.length - done;

  const result = onSort( state.filter );

  return (
    <div className='container'>
      <AppHeader todo={todo} done={done} />
      <SearchPanel 
      filter={state.filter}
      onItemAdded={(e) => onItemAdded(e)} 
      onSortActive={ () => onSortActive()}
      onSortDone={ () => onSortDone() } 
      onSortAll={ () => onSortAll() } />
      <ItemAddForm 
      onItemAdded={() => {onItemAdded()}}/>
      <TodoList todos={result} 
      onDeleted={ (id) => onDeleted(id) } 
      onLabelClick={(id) => {onLabelClick(id)}} 
      onImportantClick= {(id) => {onImportantClick(id)}}
      />
    </div>
  );
}

export default App;
