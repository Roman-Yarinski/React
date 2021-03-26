import React from 'react';
import ItemStatusFilter from '../item-status-filter';
import './search-panel.css';

const SearchPanel = ({ onItemAdded, onSortDone , onSortActive, onSortAll, filter }) => {
  return  (
  <form className='search-panel' onSubmit={onItemAdded}>
  <input className='search-input' placeholder='Add Todo'  />
  <ItemStatusFilter 
  filter = { filter }
  onSortDone={ onSortDone } 
  onSortActive = { onSortActive } 
  onSortAll = { onSortAll }/>
  </form>
  );
}

export default SearchPanel;
