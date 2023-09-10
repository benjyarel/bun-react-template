import React from 'react';
import * as ReactDOM from 'react-dom/client';


const App = ({message} : {message: string}) => <h1>{message}</h1>
console.log("coucou")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App message="Sup!" />)