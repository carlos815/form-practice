import React from 'react';
import Tab from './Tab';

export default function TabBar(props) {

    const tabs = props.formTemplate.tabs.map ((tab) => {
        return <Tab id={tab.id} Name={tab.title} goToPage={props.goToPage} currentPageId={props.currentPageId}/>
    })

    return (
        <div className='tab-bar'>
            {tabs}
        </div>
    )
    }

