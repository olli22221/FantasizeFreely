import React ,{useEffect, useRef, useState} from 'react';
import { imagesDictionary } from './util';





const ShowImages = ({images}) => {



    return(
        <div >
        
        {images.map( (note,idx) => {
              
            return(
     <img 
         className='InspirationIMG'
         height="100px" 
         width="100px" 
         src= {imagesDictionary[note]} 
        
         
         
     />
            )    } )
        }

</div>              
    
 )
}

export default ShowImages;