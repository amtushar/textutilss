import React,{useState} from 'react'



export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange = (event)=>{
    setText(event.target.value);
    }
    

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase","success");
    }
    const handleLowClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
    props.showAlert("converted to lowercase","success");

      }
      const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
    props.showAlert("Cleared","success");

        }
      const handleCopy = ()=>{
         let text = document.getElementById("myBox");
         text.select();
         navigator.clipboard.writeText(text.value);
    props.showAlert("Copied","success");

          }
      const handleSpaces = ()=>{
       let newText = text.split(/[ ]+/); 
       setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");

       }
  return (

    <div className='container'>
    <h3> {props.heading}</h3>
<div className="mb-3">
   <textarea className="form-control" id="myBox" value={text} onChange={handleChange}  rows="8"></textarea>
</div>
<button className= "btn btn-secondary mx-1" onClick={handleUpClick}> Uppercase</button> 
<button className= "btn btn-secondary mx-2" onClick={handleLowClick}> lowercase</button> 
<button className= "btn btn-secondary mx-2" onClick={handleClearClick}> Clear</button> 
<button className= "btn btn-secondary mx-2" onClick={handleCopy}> Copy Text</button> 
<button className= "btn btn-secondary mx-2" onClick={handleSpaces}> Remove extra spaces</button> 



 <div className='container my-3'>
 <h3>your text summary</h3>
 <p>{text.split(" ").length - 1 } words and {text.length} characters </p>
 <p>average reading time {(0.08* text.split(" ").length)  } minutes </p>
 <h4>preview </h4>
 <p> {text.length>0?text:"Enter something in above text-box to preview it here"}   </p>
 </div>
 </div>
  )
}
