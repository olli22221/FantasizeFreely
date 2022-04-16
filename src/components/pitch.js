
import React, { useRef, useEffect} from 'react'

const Pitch =({ type }) => {

    useEffect(() => {

        console.log(type)

    },[type])

    return (
      <div>
        {(() => {
          switch (type) {
            case '8d':
              return  <img height="150px" width="150px" src={require("../media/8d.jpg")}/> ;
            case 'h':
              return <img height="150px" width="150px" src={require("../media/h.png")} /> ;
            case 'q':
              return <img height="150px" width="150px" src={require("../media/q.png")} /> ;
            default:
              return null;
          }
        })()}
      </div>
    );
  }

  export default Pitch;