import React , { useState }  from 'react'

export default function TextForm(props) {
    const handleOnClick=()=>{
        let upper=text.toUpperCase();
        setText(upper);
     }
     const handlelowClick=()=>{
        let upper=text.toLowerCase();
        setText(upper);
     }

    
    const [text, setText] = useState("Enter Text Here");

   const handleOnChange=(event)=>{
      setText(event.target.value);
    }
    
  return (
    <>
    <div style={{color: props.mode==='light'?'black':'white'}}>
    <h1> Enter Your Text here</h1>
  <div>
<div className="mb-3">
  <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8" style={{backgroundColor: props.mode==='light'?'white':'black' ,color: props.mode==='light'?'black':'white'   }}></textarea>
</div>
<button type="button" onClick={handleOnClick} className="btn btn-primary">toUpperCase</button>
<button type="button"  onClick={handlelowClick} className="btn btn-primary" id="btn2">toLowerCase</button>


</div>
<div className="container my-2">
    <h1>Your Text Summary</h1>
    <p>
        Total words={text.split(" ").filter((element)=>{return element.length!==0}).length}
        Total length={text.length}
    </p>
    <p>{text}</p>
</div>

</div>
    </>
  )
}

