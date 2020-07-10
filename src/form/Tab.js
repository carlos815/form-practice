import React, { useEffect } from 'react';

export default function Tab(props) {
/*
    useEffect(() => {
        console.log(props.id)
        console.log(props.currentPageId)
      }, [props])*/
    let classNameOfTab = 'tab'
    console.log()

    if (props.id == props.currentPageId) classNameOfTab = 'tab active'

    return (
        <div className={classNameOfTab} onClick={() => props.goToPage(props.id)}>
            <div>{props.Name}</div>
        </div>
    )
    }

