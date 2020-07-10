import React from 'react';
import ContinueButton from './ContinueButton';
import BackButton from './BackButton';



export default function FormFooter(props) {
    return (
        <nav>
            <div className='subir-archivo-button'>Subir Archivo</div>
            <div className='nav-buttons'>
                

                <BackButton goToPreviousPage = {props.goToPreviousPage} isFirst={props.currentPage.isFirst}/>

                <ContinueButton goToNextPage = {props.goToNextPage} isLast={props.currentPage.isLast} />
               
            </div>
        </nav>
    )
}
