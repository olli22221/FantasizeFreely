
import React, { useRef, useEffect ,useImperativeHandle ,forwardRef, createElement} from 'react'
import VexFlow from 'vexflow'
const VF = VexFlow.Flow
const { Formatter, Renderer, Stave, StaveNote ,Beam} = VF
class ScoreClass extends React.Component {

    constructor(props){
        super(props)
        this.container = React.createRef();
        this.rendererRef = React.createRef();
        this.note = props.note
        
      
    }

    render() {
        
    const div = document.createElement('div')
    div.id = 'div'
    const renderer = new VF.Renderer(div, Renderer.Backends.SVG)
    renderer.resize(500, 200)
    const context = renderer.getContext()
    const stave = new VF.Stave(10, 40, 400)
    stave.addClef("treble").addTimeSignature("4/4");
    stave.setContext(context).draw();
    this.refs.outer.appendChild(div)

    return (
        <div ref="outer" />
        )
    }
}

export default ScoreClass;