import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { set } from 'date-fns';

//how to handle event
//how to handle state in react
//useState is a hook
//hooks are special function which can be used to add state and other react features to functional components
export default function Textform(props) {
    const handleclick = () => {
          
        console.log("uppercase was clicked " + text);
        let newtext = text.toUpperCase();
        setText(newtext);
       
        console.log(newtext);
    }
    const handleOnChange = (dvent) => {
      setText(dvent.target.value); // Moved below

      console.log("Event Object:", dvent);
      console.log("Event Type:", dvent.type);
      console.log("Element ID:", dvent.target.id);
      console.log("Target Element:", dvent.target);
      console.log("Typed Value:", dvent.target.value);
      console.log("on change");
    };

    const [text, setText] = useState("enter text here");
  //  text="fmkemkdf"//wrong way to change the state
   // setText("fmdkfmdkmfk");
  return ( 

      <form >
          <h1>{props.heading}</h1>
          <textarea id="textareainput"className="form-control form-control-lg" value={text} onChange={handleOnChange} placeholder=".form-control-lg" aria-label=".form-control-lg example"row='10'>
          </textarea>
          <button type='button' className='btn btn-primary my-3' onClick={handleclick}>convert to uppercase</button>
</form>
      
  );
}



 

