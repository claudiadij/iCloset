import WardrobeItem from './WardrobeItem';
import '/Users/claudiadijmarescu/Documents/Wardrobe/wardrobe/src/components/Wardrobe/Wardrobe.elements.css';

function Wardrobe(props) {
  return (
      <div className="list" >
        {props.items.map((item) => (
          <WardrobeItem
            key={item.id}
            id={item.id}
            image={item.image}
            subcategory={item.subcategory}
            color={item.color}
          />
        ))}
      </div>
  );
}

export default Wardrobe;