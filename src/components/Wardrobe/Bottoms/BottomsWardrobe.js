import BottomsWardrobeItem from './BottomsWardrobeItem';
import '/Users/claudiadijmarescu/Documents/Wardrobe/wardrobe/src/components/Wardrobe/Wardrobe.elements.css';

function BottomsWardrobe(props) {
  return (
      <div className="list" >
        {props.items.map((item) => (
          <BottomsWardrobeItem
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

export default BottomsWardrobe;