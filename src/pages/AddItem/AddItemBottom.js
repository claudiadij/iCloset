import React from 'react';
import { useHistory } from 'react-router-dom';
import { BottomAddItemForm } from '../../components/AddItem/BottomsAddItemForm';

export function BottomAddItem() {
  const history = useHistory();

  function addItemHandler(addItemData) {
    fetch(
      'https://icloset-1d27c-default-rtdb.firebaseio.com/items/bottoms.json',
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
      <BottomAddItemForm onAddItem={addItemHandler} />
    </>
  );
}

export default BottomAddItem;