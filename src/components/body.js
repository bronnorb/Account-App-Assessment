import React from 'react';
import { Avatar, Form } from './';
import './body.css'

export function Body(props){
    return(
        <div className='body-container'>
            <Avatar user={props.user} />
            <Form 
                edit={props.edit} 
                user={props.newUser} 
                onInputChange={props.onInputChange}
                errors={props.errors} 
                onValidateInput={props.onValidateInput}
            />
        </div>
    )
}


