import React,{useState} from 'react'



export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange = (event)=>{
    setText(event.target.value);
    }
    

  const handleClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    }
    
  return (
    <div>
    <h3> {props.heading}</h3>
<div className="mb-3">
  <textarea className="form-control" id="myBox" Onchange={handleChange}  rows="8"></textarea>
</div>
<button className= "btn btn-primary" onClick={handleClick}>Convert to Uppercase</button>
 </div>
  )
}
