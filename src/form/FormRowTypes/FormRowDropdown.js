import React, { useState, useEffect } from 'react';

export default function FormRowDropdown(props) {
    
    const rowName = props.attributes.name;
    let rowValue = props.formState[rowName];
    const initialFormState = { name: rowName, value: ''}
    const [input, setInput] = useState(initialFormState)
    
    const handleInputChange = (event) => {

      const { name, value } = event.target
      setInput({name: name, value: value})

      props.updateFormState({name: name, value: value});
    }


    useEffect(() => {
        const newValue = props.formState[rowName] ? props.formState[rowName]: '';
        setInput({name: rowName, value: newValue})
      }, [props.currentPage])
  

    const formRowsDropdown = (
        props.attributes.content.map((option) => {
            return (
                    <option className='dropdown-item' value={option.value} id={option.id}>{option.label}</option>
            );
        })
    );


    return (
        <div className='form-row'>
            <legend>{props.attributes.label}</legend>
                <div className='select'>
                    <select name={props.attributes.name} id={props.attributes.name} value={input.value} onChange={handleInputChange} required>
                    <option value="" disabled selected>Seleccione</option>
                        {formRowsDropdown}
                    </select>
                </div>
        </div>
    )
    }