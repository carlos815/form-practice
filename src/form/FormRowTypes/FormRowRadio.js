import React, {useEffect} from 'react';

export default function FormRowRadio(props) {




    const handleChange = (name, value) => {
        props.updateFormState({ name: name, value: value });
    }
    
        useEffect(() => {
          }, [props.currentPage])
    
    

    const isSelected = (name, value) => {
        return value == props.formState[name] ? true : false
    }

    const formRowsRadio = (
        props.attributes.content.map((option) => {
            return (
                <div className='radio-button' >
                    <input
                        type="radio"
                        name={props.attributes.name}
                        id={option.id}
                        value={option.value}
                        checked={isSelected(props.attributes.name, option.value)}
                    />
                    <label for={option.id} onClick={() => handleChange(props.attributes.name, option.value)}
                    >{option.label}</label>
                </div>
            );
        })
    );

    return (
        <div className='form-row radio-buttons'>
            <legend>{props.attributes.label}</legend>
            <div className='radio-buttons-actual-buttons'>
                {formRowsRadio}</div>
        </div>
    )
}