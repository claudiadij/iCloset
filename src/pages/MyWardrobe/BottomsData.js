import React, { useState, useEffect } from 'react';
import BottomsWardrobe from '../../components/Wardrobe/Bottoms/BottomsWardrobe';

function BottomsData() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedClothes, setLoadedClothes] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://icloset-1d27c-default-rtdb.firebaseio.com/items/bottoms.json',
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        const clothes = [];

        for (const key in data) {
          const cloth = {
            id: key,
            ...data[key]
          };

          clothes.push(cloth);
        }

        setIsLoading(false);
        setLoadedClothes(clothes);
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
      <BottomsWardrobe items={loadedClothes} />
    </>
  );
}

export default BottomsData;