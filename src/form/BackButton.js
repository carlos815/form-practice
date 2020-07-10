import React from 'react';


export default function ContinueButton(props) {



    let isInactiveClass = props.isFirst ? 'inactive': '';
    const btn =  <button className={isInactiveClass} onClick={props.goToPreviousPage}>Anterior
    </button>


    return btn
    }

