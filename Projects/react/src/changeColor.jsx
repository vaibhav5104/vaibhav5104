import React, { useState } from "react";
import './style.css';

const App = () => {
    let [bgColor,change] = useState('#8e44ad');
    let [bgButtonColor,change2] = useState('#9b59b6');
    const [word,setWord] = useState("Click Me");
  
    const changeFunc = () => {  
        change(
            bgColor = 'gray'
        );
        setWord("OUCH !! ");
        change2('green');
    }

    return (
        <>
        <div style={{backgroundColor: bgColor}}>
            <button onClick={changeFunc} style={{backgroundColor:bgButtonColor}}>{word}</button>
        </div>
        </>
    );
}

export default App;