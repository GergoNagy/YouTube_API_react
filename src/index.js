import React from 'react'
import ReactDOM from 'react-dom'
//Create a new component
const App = () => {
    return <div>Hi!</div>;
}
//Generated a HTML and Pass to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));