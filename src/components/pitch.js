import React, { useRef, useEffect} from 'react'


  const Pitch =({ type }) => {

    useEffect(() => {

        console.log(type)

    },[type])

    return (
      <div>
        {(() => {
          switch (type) {
            case 'c/4':
              return  <img height="100px" width="100px" src={require("../media/pitches/Gclef_C1_1-4.png")}/> ;
            case 'd/4':
              return  <img height="100px" width="100px" src={require("../media/pitches/Gclef_D1_1-4.png")}/> ;
            case 'e/4':
              return  <img height="100px" width="100px" src={require("../media/pitches/Gclef_E1_1-4.png")}/> ;
            case 'f/4':
              return  <img height="100px" width="100px" src={require("../media/pitches/Gclef_F1_1-4.png")}/> ;
            case 'g/4':
              return  <img height="100px" width="100px" src={require("../media/pitches/Gclef_G1_1-4.png")}/> ;
            case 'a/4':
              return  <img height="100px" width="100px" src={require("../media/pitches/Gclef_A1_1-4.png")}/> ;
            case 'b/4':
              return  <img height="100px" width="100px" src={require("../media/pitches/Gclef_H2_1-4b.png")}/> ;
            case 'c/5':
              return  <img height="100px" width="100px" src={require("../media/pitches/Gclef_C2_1-4.png")}/> ;
            case 'd/5':
              return  <img height="100px" width="100px" src={require("../media/pitches/Gclef_D2_1-4.png")}/> ;
            case 'e/5':
              return  <img height="100px" width="100px" src={require("../media/pitches/Gclef_E2_1-4.png")}/> ;
            case 'f/5':
              return  <img height="100px" width="100px" src={require("../media/pitches/Gclef_F2_1-4.png")}/> ;
            case 'g/5':
              return  <img height="100px" width="100px" src={require("../media/pitches/Gclef_G2_1-4.png")}/> ;
            case 'a/5':
              return  <img height="100px" width="100px" src={require("../media/pitches/Gclef_A2_1-4.png")}/> ;
            case 'b/5':
              return  <img height="100px" width="100px" src={require("../media/pitches/Gclef_H3_1-4.png")}/> ;
            default:
              return null;
          }
        })()}
      </div>
    );
  }


  export default  Pitch;