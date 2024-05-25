import React, { useState } from 'react';
import './style.css';

function App(){
    // const state = useState();
    let newTime = new Date().toLocaleTimeString() + (new Date().getHours() <= 12 ? ' AM' : ' PM');
    let [currentTime , setCurrentTime] = useState(newTime);
    function Ctime(){
        let newTime = new Date().toLocaleTimeString() + (new Date().getHours() <= 12 ? ' AM' : ' PM');
            setCurrentTime(newTime)
    }

    setInterval(Ctime,1000);

    return (
        <>
        <div className='main'>
        {/* setTimeout(Ctime,1000) */}
        

        <h1>{currentTime}</h1>
        

    {/* <button onClick={Ctime}>GET TIME</button> */}
        </div>

    </>
    );
    



}

export default App;