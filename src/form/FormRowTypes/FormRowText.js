import React, { useState, useEffect } from 'react';

export default function FormRowText(props) {

    const rowName = props.attributes.name;
    const initialFormState = { name: rowName, value: props.formState[rowName]}
    const [input, setInput] = useState(initialFormState)
  
    const handleInputChange =  (event) => {
      const { name, value } = event.target
        
      setInput({name: name, value: value})
      props.updateFormState({name: name, value: event.target.value});
    }

    useEffect(() => {
        const newValue = props.formState[rowName] ? props.formState[rowName]: '';
        setInput({name: rowName, value: newValue})
      }, [props.currentPage])
  
    return (
        <div className='form-row'>
            <legend>{props.attributes.label}</legend>
            <input 
                className='text-input' 
                type='text' 
                name={rowName} 
                id={rowName} 
                placeholder={props.attributes.content}
                value={input.value}
                key={rowName}
                onChange={handleInputChange}
                />
        </div>
    )
    }   