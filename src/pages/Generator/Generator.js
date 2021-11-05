import React from "react";
import { Navbar } from "../../components";
import Generator from "./Data";
import classes from '/Users/claudiadijmarescu/Documents/Wardrobe/wardrobe/src/components/AddItem/AddItemForm.module.css';

function displayGenerator() {
    return (
      <>
        <Navbar />
        <div className={classes.center}>
        <br />
          <h1>Step 3: Get your outfit! </h1>
        </div>
        <Generator />
      </>
    );
  }
  
  export default displayGenerator;