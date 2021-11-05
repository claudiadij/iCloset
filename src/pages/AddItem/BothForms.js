import React from 'react';
import { Navbar } from '../../components';
import AddItem from './AddItem';
import BottomAddItem from './AddItemBottom';
import classes from '/Users/claudiadijmarescu/Documents/Wardrobe/wardrobe/src/components/AddItem/AddItemForm.module.css';

function AddForm() {
  return (
    <>
      <Navbar />
      <div className={classes.center}>
        <br />
        <h1>Step 1: Add pictures and descriptions of all of your pieces! </h1>
      </div>
      <AddItem />
      <div className={classes.center}>
        <h1>&</h1>
      </div>
      <BottomAddItem />
    </>
  );
}

export default AddForm;