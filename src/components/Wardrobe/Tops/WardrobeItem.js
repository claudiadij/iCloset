import React from 'react';
import '/Users/claudiadijmarescu/Documents/Wardrobe/wardrobe/src/components/Wardrobe/WardrobeItem.elements.css';
import { AppContainer } from '../../AccountBox/AccountBox.elements';

export function WardrobeItem(props) {
  return (
    <AppContainer>
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
    </AppContainer>
  );
}

export default WardrobeItem;