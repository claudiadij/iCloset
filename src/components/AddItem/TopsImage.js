import React, { useState, useEffect, useRef } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";

function TopImageUpload(props) {

    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const filePickerRef = useRef();

    useEffect(() => {
        if(!file){
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload=() => {
            setPreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    },[file]);

    function pickedHandler(event){
        let pickedFile;
        if(event.target.files && FaEnvelopeOpenText.target.files.length===1){
            pickedFile=event.target.files[0];
            setFile(pickedFile);
            props.setData((prev)=>{
                return{...prev,image:pickedFile}
            });
        }
    }

    return(
        <div className="form-control center">
            <input 
            id={props.id}
            ref={filePickerRef}
            type="file"
            accepts=".jpg, .png, .jpeg"
            onChange={pickedHandler}
            />
        </div>
        
    )
}

export default TopImageUpload;