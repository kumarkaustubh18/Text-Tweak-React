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
     const handleCamelClick=()=>{
      let b=""
      for(let i=0;i<text.length;i++)
        {
            if(text.charAt(i) === ' ')
            {
               b=b+"_" ;
            }
            else{
                b=b+text.charAt(i);
            }
        }
        setText(b);
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
  <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8" style={{backgroundColor: props.mode === 'light'?'white':'black' ,color: props.mode === 'light'?'black':'white'}}></textarea>
</div>
<button type="button" onClick={handleOnClick} className="btn btn-primary">toUpperCase</button>
<button type="button"  onClick={handlelowClick} className="btn btn-primary" id="btn2">toLowerCase</button>
<button type="button"  onClick={handleCamelClick} className="btn btn-primary" id="btn3">toCamelCase</button>



</div>
<div className="container my-2">
    <h1>Your Text Summary</h1>
    <p>
        Total words={text.split(" ").filter((element)=>{return element.length!==0}).length}
        Total length={text.length}
    </p>
    <p>{text}</p>
</div>
<div>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
<a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." className="float" target="_blank">
<i className="fa fa-whatsapp my-float"></i>
</a>
</div>
</div>
    </>
  )
}

