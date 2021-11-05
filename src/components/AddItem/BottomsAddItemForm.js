import React, { useRef } from "react";
import classes from '/Users/claudiadijmarescu/Documents/Wardrobe/wardrobe/src/components/AddItem/AddItemForm.module.css';
import { Card } from "./TopsAddItemForm";


export function BottomAddItemForm(props) {
    const imageInputRef = useRef();
    const subcategoryInputRef = useRef();
    const colorInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredImage = imageInputRef.current.value;
        const enteredsubCategory = subcategoryInputRef.current.value;
        const enteredColor = colorInputRef.current.value;

        const addItemData = {
            image: enteredImage,
            subcategory: enteredsubCategory,
            color: enteredColor
        };

        props.onAddItem(addItemData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.center}>
                    <h1>Bottoms</h1>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Photo</label>
                    <input 
                        type='url' 
                        required id='image'
                        ref={imageInputRef} 
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='subcategory'>Style</label>
                    <input 
                        type='text' 
                        required id='subcategory' 
                        ref={subcategoryInputRef}
                        placeholder='Jeans, Sweats, etc.'
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='color'>Color</label>
                    <input 
                        type='text' 
                        required id='color' 
                        ref={colorInputRef} 
                        placeholder='Black, White, etc.'
                    />
                </div>
                <div className={classes.center}>
                    <div className={classes.actions}>
                        <button>Add Item</button>
                    </div>
                </div>    
            </form>
        </Card>
    );
};
