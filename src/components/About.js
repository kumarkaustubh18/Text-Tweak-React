
export default function About(props) {
   let myStyle={
    color: props.mode === 'light'?'black':'white',
    backgroundColor: props.mode === 'light'?'white':'black'
   }
  return (
    <>
    <div className="accordion" id="accordionExample" >
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Text Transformation Functionality
      </button>
    </h2>
    <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
      <div className="accordion-body">
      The project provides a user-friendly interface for transforming text. Users can easily enter text in the textarea and apply different transformations such as converting the text to uppercase, lowercase, or camel case. This functionality can be useful in various scenarios, such as formatting text for display purposes or manipulating text for specific requirements.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Real-time Updates
      </button>
    </h2>
    <div id="collapseTwo" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The project utilizes React's state management to update the transformed text in real time. As the user enters or modifies text, the transformed output is immediately updated on the screen without the need for manual submission. This provides a smooth and responsive user experience, allowing users to see the results of their transformations instantly.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Text Summary and Analysis
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The project includes a text summary section that provides useful information about the entered text. It displays the total number of words in the text and the total length of the text. This can be beneficial when analyzing or working with text data, as it provides a quick overview of the text's characteristics. Users can easily retrieve important information about the text without performing manual calculations or analysis.
      </div>
    </div>
  </div>
</div>
    </>
  )
}
