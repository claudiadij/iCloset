import React, { Component, useRef, useState, useEffect } from "react";
import styled from "styled-components";
// import firebase from "firebase/compat/app";
import classes from '/Users/claudiadijmarescu/Documents/Wardrobe/wardrobe/src/components/AddItem/AddItemForm.module.css';


export const Card = styled.div`
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    margin: 3rem auto;
    width: 90%;
    max-width: 40rem;
`;

export function AddItemForm(props) {
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
    };


        return (
            <Card>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes.center}>
                        <h1>Tops</h1>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='file'>Photo</label>
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
                            placeholder='Tshirt, Sweater, etc.'
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

