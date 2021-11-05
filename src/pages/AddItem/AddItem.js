import React from 'react';
import { useHistory } from 'react-router-dom';
import { AddItemForm } from '../../components/AddItem/TopsAddItemForm';

export function AddItem() {
  const history = useHistory();

  function addItemHandler(addItemData) {
    fetch(
      'https://icloset-1d27c-default-rtdb.firebaseio.com/items/tops.json',
      {
        method: 'POST', 
        body: JSON.stringify(addItemData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/my-wardrobe');
    });
    
  }

  return (
    <>
      <AddItemForm onAddItem={addItemHandler} />
    </>
  );
}

export default AddItem;