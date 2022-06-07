import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

const GiftExpertApp = () =>{
  
// para agragar mas elementos no seria la manera correcta al renderizar tendriamos problemas  
 const [categories, setCategories] = useState(['One Punch']); //usaremos este hook que nos permite realizar esta tarea de manera sencilla

//  const handlerAdd = () => {

//     const anime = 'Bleach';
//     // setCategories([...categories, anime]);//este es un meto de poder agregar un elemento, nunca usarse el push(), duplica
//     setCategories( cats => [...cats, anime]);//este metodo es mas practico

//  }

  return  <>
      <h2> GiftExpertApp </h2>
      <AddCategory setCategories= { setCategories }/>
      <hr/>
     
       <ol>
           { 
            categories.map( Category => 
                <GiftGrid 
                 key={ Category }
                 Category={ Category }
                />
                )
            //    categories.map( Category => {//los arreglos ofrecen un metodo llamado map que nos permite rrecorrer;
            //       return <li key={ Category }> { Category } </li> //los valores del arreglo. // recibe dos valores el elemento del arreglo y el indice
                  
            //    })
           }
       </ol>
   </>

}

export default GiftExpertApp;