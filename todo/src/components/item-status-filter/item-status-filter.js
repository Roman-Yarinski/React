import React from 'react';
import './item-status-filter.css'

const ItemStatusFilter = ({ onSortActive, onSortDone, onSortAll, filter }) => {
  return (
    <div className='btn-group'>
      {console.log('Filter: ', filter === 'done')}
      <button type='button' className={ 
        `btn ${ filter === 'all' ? 'btn-info' : 'btn-outline-secondary' }`
      }
      onClick={ onSortAll }>All</button>
      <button type='button' 
      className={ 
        `btn ${ filter === 'active' ? 'btn-info' : 'btn-outline-secondary' }`
      }
      onClick={ onSortActive } >Active</button>
      <button type='button' 
      className={ 
        `btn ${ filter === 'done' ? 'btn-info' : 'btn-outline-secondary' }`
      }
      onClick={ onSortDone } >Done</button>
    </div>
  );
}

export default ItemStatusFilter;
