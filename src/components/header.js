import React from 'react';
import './header.css'

export function Header(props){

    //function that either saves data or goes to edit view
    //depending on edit state
    function onToggleClick(){
        if(props.edit){
            props.onSaveClick();
        }
        else{
            props.setEdit(true);
        }
    }

    //function to handle back click
    function onBackClick(){
        props.onCancelClick();
        props.setEdit(false);
    }

    return(
        <div className="header-container">
            <div className='header-block'>
                {props.edit &&
                    <div className='header-back-button' onClick={onBackClick}>&#8249;</div>
                }
                <h1 className='header-title'>My Account</h1>
            </div>
            <button className='header-button' onClick={onToggleClick}>
            {props.edit ? 'Save' : 'Edit'}  
            </button>
        </div>
    )
}