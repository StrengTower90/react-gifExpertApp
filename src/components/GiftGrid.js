import React, { useState, useEffect } from 'react';
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';



export const GiftGrid = ( { Category }) => { 

    const { data:images, loading} = useFetchGifs( Category );        

    return (
        <>
        <h3 className='animate__animated animate__bounce'>{ Category }</h3>
        
        { loading && <p className='animate-animated animate__heartBeat'>Loading...</p>}
        <div className="card-grid">            
            
                {
                    images.map( img => (
                        < GifGridItem  
                        key = { img.id }
                         {...img }//operador spred 
                        />
                    ))                   
                          
                        
                
                    // images.map( i => 
                    //      <li key={ i.id } > { i.title } </li> 
                    //      )
                    // images.map( ( { id, title }) => (
                    //     <li key={ id }>{ title }</li>
                    // ))
                }
                        
        </div>
        </>
        
    )
}