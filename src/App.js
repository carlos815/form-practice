import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

import ResultsPage from './ResultsPage';
import Form from './Form';




function App() {

  const formTemplate = {
    tabs: [
      {
        id: 0,
        title: 'Crear Normativa Legal',
        forms: [
          {
            label: 'Origen',
            name: 'origen',
            type: 'radio',
            content: [
              { label: 'Nacional',      value: 'nacional',      id: 'a' },
              { label: 'Internacional', value: 'internacional', id: 'b' },
            ], 
          },

          { label: 'ID Normativa',name: 'id-normativa', type: 'text', content: 'You can change this with the JSON!', },
          { label: 'Número', name: 'número', type: 'text', content: 'N°'},
          { label: 'Título',  name: 'título' , type: 'text', content: 'Título', name: 'título' },

          {
            label: 'Tipo de Documento Legal',
            name: 'tipo-documento',
            type: 'dropdown',
            content: [
              { label: 'Registro Civil',        value: 'registro civil',  id: 'c' },
              { label: 'Pasaporte',             value: 'pasaporte',       id: 'd' },
              { label: 'Identificación',        value: 'id',              id: 'e' },
              { label: 'Licencia de conducir',  value: 'licencia',        id: 'f' },
              { label: 'Partida de nacimiento', value: 'birther',         id: 'g' },
              { label: 'Carnet',                value: 'carnet',          id: 'h' },
              { label: 'Otros documentos',      value: 'otrosdoc',        id: 'i' },
            ],
          },

          {
            label: 'Tipo de Norma Legal', 
            name: 'tipo-norma', 
            type: 'dropdown',
            content: [
              { label: 'Norma 1', value: 'n1', id: 'j' },
              { label: 'Norma 2', value: 'n2', id: 'k' },
              { label: 'Norma 3', value: 'n3', id: 'l' },
              { label: 'Norma 4', value: 'n4', id: 'm' },
              { label: 'Norma 5', value: 'n5', id: 'n' },
              { label: 'Norma 6', value: 'n6', id: 'ñ' },
              { label: 'Norma 7', value: 'n7', id: 'o' },],
          },

          {
            label: 'Organismo Emisor', name: 'emisor', type: 'dropdown',
            content: [
              { label: 'Organismo 1', value: 'o1', id: 'p' },
              { label: 'Organismo 2', value: 'o2', id: 'q' },
              { label: 'Organismo 3', value: 'o3', id: 'r' },
              { label: 'Organismo 4', value: 'o4', id: 's' },
              { label: 'Organismo 5', value: 'o5', id: 't' },
              { label: 'Organismo 6', value: 'o6', id: 'u' },
              { label: 'Organismo 7', value: 'o7', id: 'v' },
            ], 
          },
          { label: 'URL', type: 'url', content: 'URL', name: 'url' },
        ]
      },

      {
        id: 1,
        title: 'Datos Personales',
        forms: [

          { label: 'Nombre', type: 'text', content: 'Nombre', name: 'nombre' },
          { label: 'Apellido', type: 'text', content: 'Apellido', name: 'apellido' },
          {
            label: 'Sexo', type: 'radio',
            content: [
              { label: 'Masculino', value: 'masculino', id: 'w' },
              { label: 'Femenino', value: 'femenino', id: 'x' },
              { label: 'Otro', value: 'otro', id: 'y' },
            ], name: 'sexo'
          },

          {
            label: 'Color favorito',
            type: 'dropdown',
            content: [
              { label: 'Verde', value: 'verde', id: 'aa' },
              { label: 'Rojo', value: 'rojo', id: 'ab' },
              { label: 'Azul', value: 'azul', id: 'ac' },
              { label: 'Amarillo', value: 'amarillo', id: 'ad' },
              { label: 'Naranja', value: 'naranja', id: 'ae' },
              { label: 'Púrpura', value: 'púrpura', id: 'af' },

            ],
            name: 'color'
          },
          {
            label: 'Helado', type: 'radio',
            content: [
              { label: 'Fresa', value: 'fresa', id: 'ag' },
              { label: 'Chocolate', value: 'chocolate', id: 'ah' },
              { label: 'Mantecado', value: 'mantecado', id: 'aj' },
              { label: 'Mango', value: 'mango', id: 'ak' },

            ], name: 'helado'
          },
 

          {
            label: 'Lenguaje de programación más utilizado', type: 'dropdown',
            content: [
              { label: 'C', value: 'c', id: 'aj' },
              { label: 'Java', value: 'jv', id: 'ak' },
              { label: 'Python', value: 'py', id: 'al' },
              { label: 'C++', value: 'c++', id: 'am' },
              { label: 'C#', value: 'c#', id: 'añ' },
              { label: 'Visual Basic', value: 'vb', id: 'ao' },
              { label: 'JavaScript', value: 'js', id: 'ap' },
              { label: 'R', value: 'r', id: 'aq' },
              { label: 'PHP', value: 'php', id: 'ar' },
              { label: 'Swift', value: 'sw', id: 'as' },
              { label: 'Go', value: 'go', id: 'at' },
              { label: 'Assembly language', value: 'as', id: 'au' },

            ], name: 'lenguaje-de-programacion'
          },
          { label: 'Universidad', type: 'text', content: 'Universidad', name: 'universidad' },

        ]
      },
      {
        id: 2,
        title: 'Control y Versión de Vigencia',
        forms: [
          {

            label: '', type: 'radio',
            content: [
              { label: 'Agua', value: 'Agua', id: '1v' },
              { label: 'Fuego', value: 'Fuego', id: '2v' },
              { label: 'Tierra', value: 'Tierra', id: '3v' },
              { label: 'Aire', value: 'Aire', id: '4v' },

            ], name: 'elementos'
          },
          { label: 'Dirección 1', type: 'text', content: 'Dirección 1', name: 'direccion1' },
          { label: 'Dirección 2', type: 'text', content: 'Dirección 2', name: 'direccion2' },

     , { label: 'Más información', type: 'text', content: 'Más información', name: 'mas-info' },
        ]
      },
      {
        id: 3,
        title: 'Otras opciones',
        forms: [
          { label: 'Sobrenombre', type: 'text', content: 'Sobrenombre', name: 'sobrenombre' },
          { label: 'Sobreapellido', type: 'text', content: 'It\'s a thing', name: 'sobreapellido' },
          { label: 'Catchphrase', type: 'text', content: 'Catchphrase', name: 'catchphrase' },
          {
            label: 'Preferencias', type: 'dropdown',
            content: [
              { label: 'Preferencia 1', value: 'o1', id: 'p1' },
              { label: 'Preferencia 2', value: 'o2', id: 'p2' },
              { label: 'Preferencia 3', value: 'o3', id: 'p3' },
              { label: 'Preferencia 4', value: 'o4', id: 'p4' },
              { label: 'Preferencia 5', value: 'o5', id: 'p5' },
              { label: 'Preferencia 6', value: 'o6', id: 'p6' },
              { label: 'Preferencia 7', value: 'o7', id: 'p7' },
            ], name: 'preferencias'
          }, {
            label: 'Vocal favorita', type: 'radio',
            content: [
              { label: 'A', value: 'a', id: 'a' },
              { label: 'E', value: 'e', id: 'e' },
              { label: 'I', value: 'i', id: 'i' },
              { label: 'O', value: 'o', id: 'o' },
              { label: 'U', value: 'u', id: 'u' },
            ], name: 'vocal'
          },

          {
            label: 'Número Favorito', type: 'dropdown',
            content: [
              { label: '1', value: '1', id: '1v' },
              { label: '2', value: '2', id: '2v' },
              { label: '3', value: '3', id: '3v' },
              { label: '4', value: '4', id: '4v' },
              { label: '5', value: '5', id: '5v' },
              { label: '6', value: '6', id: '6v' },
              { label: '7', value: '7', id: '7v' },
              { label: '8', value: '8', id: '8v' },
              { label: '9', value: '9', id: '9v' },
              { label: '0', value: '0', id: '0v' },
            ], name: 'numero'
          },]
      },


    ],
  }

  const initialPageState = { currentPage: formTemplate.tabs[0], isLast: false, isFirst: true }
  const initialFormState = {}

  const [currentPage, setPage] = useState(initialPageState);
  const [formState, setFormState] = useState(initialFormState);



  const goToPage = (pageid) => {
    const page = formTemplate.tabs.find((page) => page.id == pageid)

    setPage({ currentPage: page, isLast: isLastPage(pageid), isFirst: findPageIndex(page.id) == 0 })
  }

  const goToNextPage = () => {
    const nextPageIndex = findPageIndex(currentPage.currentPage.id) + 1;
    setPage({ currentPage: formTemplate.tabs[nextPageIndex], isLast: isLastPage(formTemplate.tabs[nextPageIndex].id) });
  }

  const goToPreviousPage = () => {
    const previousPageIndex = findPageIndex(currentPage.currentPage.id) - 1;
    setPage({ currentPage: formTemplate.tabs[previousPageIndex], isFirst: previousPageIndex == 0});
  }


  const isLastPage = (pageid) => {
    return findPageIndex(pageid) >= formTemplate.tabs.length - 1
  }



  const findPageIndex = (pageid) => {
    const listOfIds = formTemplate.tabs.map(element => element.id.toString());
    return listOfIds.indexOf(pageid.toString());
  }

  const updateFormState = (update) => {
    setFormState({ ...formState, [update.name]: update.value })
  }


  return (

    <Switch>
      <Route exact path="/" render={(props) => (
        <Form {...props} formTemplate={formTemplate}
          goToPage={goToPage}
          currentPageId={currentPage.currentPage.id}
          currentPage={currentPage}
          formState={formState}
          setFormState={setFormState}
          updateFormState={updateFormState}
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
      />)} />
      <Route path="/result" render={(props) => (<ResultsPage {...props} formState={formState} />)} />

    </Switch>
  );


}

export default App;
