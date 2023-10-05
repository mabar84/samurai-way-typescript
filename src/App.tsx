import React from 'react';
import './App.css';

export const App=()=> {
  return (
    <div className="App">
        <Header/>
     Hello, samurai! Let's go!
    </div>
  );
}

const Header = ()=>{
    return <>
        <ul>
            <li><a href="#"> Home </a></li>
            <li><a href="#"> Works </a></li>
            <li><a href="#"> Contacts </a></li>
        </ul>
    </>
}