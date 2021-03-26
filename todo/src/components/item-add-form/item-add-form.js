import React from 'react';

import './item-add-form.css';

const ItemAddForm =({onItemAdded}) => {
  return(
    <div className='item-add-form'>
      <button 
      type='button' 
      className='btn btn-outline-secondary' 
      onClick={onItemAdded}>
        Add Todo
      </button>
    </div>
  );
}

export default ItemAddForm;
