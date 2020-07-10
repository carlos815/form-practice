import React from 'react';
import FormRowText from './FormRowTypes/FormRowText';
import FormRowRadio from './FormRowTypes/FormRowRadio';
import FormRowDropdown from './FormRowTypes/FormRowDropdown';

export default function FormBody(props) {

    const formRows = props.currentPage.currentPage.forms.map((form) => {
        let sw;
        switch (form.type) {
            case 'text':
            case 'url':
                sw = <FormRowText attributes={form} formState={props.formState} setFormState={props.setFormState} updateFormState={props.updateFormState} currentPage={props.currentPage}/>
                break;

            case 'radio':
                sw = <FormRowRadio attributes={form} formState={props.formState} setFormState={props.setFormState} updateFormState={props.updateFormState} currentPage={props.currentPage}/>
                break;

            case 'dropdown':
                sw = <FormRowDropdown attributes={form} formState={props.formState} setFormState={props.setFormState} updateFormState={props.updateFormState} currentPage={props.currentPage}/>
                break;
            default:
                console.log('invalid input type');
                return null;
        }
        return sw;

    })

    return (
        <form action="#" >
            {formRows}
        </form>
    )
}