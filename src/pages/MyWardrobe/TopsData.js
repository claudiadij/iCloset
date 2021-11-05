import React, { useState, useEffect } from 'react';
import Wardrobe from '../../components/Wardrobe/Tops/Wardrobe';
import Navbar from '../../components/Navbar/Navbar';
import classes from '/Users/claudiadijmarescu/Documents/Wardrobe/wardrobe/src/components/AddItem/AddItemForm.module.css';


function TopsData() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://icloset-1d27c-default-rtdb.firebaseio.com/items/tops.json',
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        const items = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key]
          };

          items.push(item);
        }

        setIsLoading(false);
        setLoadedItems((prev) => {return prev.concat(items)});
      }); 
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://icloset-1d27c-default-rtdb.firebaseio.com/items/bottoms.json',
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        const items = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key]
          };

          items.push(item);
        }

        setIsLoading(false);
        setLoadedItems((prev) => {return prev.concat(items)});
      }); 
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  
  return (
    <>
      <Navbar />
      <div className={classes.center}>
        <br />
        <h1>Step 2: View your digitized wardrobe! </h1>
      </div>
      <Wardrobe items={loadedItems} />
    </>
  );
}

export default TopsData;