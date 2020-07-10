import React from 'react';
import TabBar from './form/TabBar';
import FormBody from './form/FormBody';
import FormFooter from './form/FormFooter';

export default function Form(props) {

  return (
    <div className='all'>

      <header>
        <div className='banner' />
        <div className='header-content'>
          <h1>Formulario</h1>
          <div className='header-second-row'>
            <h2>Lista Maestra de Normativa Legal Pública</h2>
            <a href='#'>Volver</a>
          </div>
        </div>
      </header>

      <div className='form-container'>
        <TabBar formTemplate={props.formTemplate} goToPage={props.goToPage} currentPageId={props.currentPage.currentPage.id} />
        <FormBody currentPage={props.currentPage} formState={props.formState} setFormState={props.setFormState} updateFormState={props.updateFormState} />
        <FormFooter goToNextPage={props.goToNextPage} goToPreviousPage={props.goToPreviousPage}
          currentPage={props.currentPage} />
      </div>

    </div>

  );
}
