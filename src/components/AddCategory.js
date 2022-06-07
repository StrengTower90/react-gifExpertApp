import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const  [ inputValue, SetIinputValue ]  = useState('');

    const handleInputChange = ( e ) => {
        SetIinputValue(e.target.value); //permite modificar el estado del input
    }

    const handleSubmit = (e) => {
       e.preventDefault();//evitamos actualizar toda la pagina
       if(inputValue.trim().length > 2){
        setCategories(cat => [inputValue, ...cat ])//la variable cat, tiene la ultima referencia al arreglo, y inputValue
     //contiene el valor de la caja de texto, aca mostraremos primero el ultimo valor agregado.
        SetIinputValue('');//limpiamos el valor del SetInputValue, para evitar duplicar el valor insertado
       }
    //console.log('submit echo');
     
    }
  
    return(

      <form onSubmit={handleSubmit}>
           <h1>{inputValue}</h1>
       <input
       type="text"
       value={ inputValue }
       onChange = { handleInputChange }
       />
      </form>
     
    
    )
}

AddCategory.propTypes =  {
    setCategories: PropTypes.func.isRequired
}