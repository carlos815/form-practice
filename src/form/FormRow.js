import React from 'react';

export default function FormRow(props) {

    return (
        <div className='form-row'>
            <legend>{props.name}</legend>
            <input type={props.type} name="id-normativa" id="1"/>
        </div>
    )
    }