import React, { useState, useEffect } from "react";
import { AppContainer } from "../../components/AccountBox/AccountBox.elements";
import '/Users/claudiadijmarescu/Documents/Wardrobe/wardrobe/src/pages/Generator/Data.css';

function Generator() {
    return (
        <AppContainer>
            <div class="container">
                    <div className="row">
                            <div className="circle" />
                            <h1 className="generator">+</h1>
                            <div className="circle" />
                    </div>
                    <div className="row">
                        <button>Generate</button>
                    </div>
            </div>
        </AppContainer>
    )
}
  
export default Generator;