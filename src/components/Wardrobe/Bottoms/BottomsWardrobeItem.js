import React from 'react';
import '/Users/claudiadijmarescu/Documents/Wardrobe/wardrobe/src/components/Wardrobe/WardrobeItem.elements.css';

export function BottomsWardrobeItem(props) {
  return (
    <div className="row">
      <div className="column">
        <div className="post">
          <div className="post_img" >
              <img src={props.image} alt="item" />
          </div>
          <div className="post_info">
              <h3 className="subcategory">{props.subcategory}</h3>
          </div>
        </div>
      </div> 
      <div className="column" />
    </div>
  );
}

export default BottomsWardrobeItem;