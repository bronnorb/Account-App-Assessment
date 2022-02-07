import React, { useState, useRef } from 'react';
import './avatar.css';
import DefaultImage from '../Blank-profile.png'

export function Avatar(props){
    //state to store image src
    let [image, setImage] = useState(DefaultImage);

    //ref to access hidden file input
    const fileUploadInput = useRef(null);

    //function that gets image file, converts it to URL
    //object, then sets the image state to it.
    function onImageChange(event){
        if(event.target.value){
            let img = URL.createObjectURL(event.target.files[0]);
            setImage(img);
        }
    }

    return(
        <div className="avatar-container">
            <div className="avatar-block">
                <img className='avatar-item avatar-image' src={image} />
                <p className='avatar-item'>{props.user.firstName} {props.user.lastName}</p>
            </div>
            <div >
                <button className="avatar-button" 
                    onClick={(e) => fileUploadInput.current.click()}>
                    Upload Image
                </button>
                <input type='file' onChange={onImageChange} style={{display:'none'}} ref={fileUploadInput} />
            </div>
        </div>
    )
}
