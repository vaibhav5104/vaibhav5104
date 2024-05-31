import React, { useState } from 'react';
// import Card from './Card';
// import Sdata from './Sdata';

// function scards(val,index){
    // console.log(val.title);
    // return (
        // <Card key={index} series={val.sname} imgsrc={val.src} link={val.link} titles={val.title} />
    // );
// }

// const count = 0;

function App() {
    // const state = useState();
// let count = 1;
let [count , setCount] = useState(0);
let [count1 , setCount1] = useState(0);

const IncNum = () => {
    setCount(parseFloat((count + 1.8).toFixed(2)));
    // console.log("clicked" + count++);
}

const IncNum1 = () => {
    setCount1(parseFloat((count1 + 1.8).toFixed(2)));
    // console.log("clicked" + count++);
}

    return (
        <>
            {/* <p className='wrapper'></p> */}
{/*  */}
            {/* {Sdata.map(scards)} */}

            {/* <div className='wrapper'>
            {Sdata.map((val, index) => (
                <Card key={index} series={val.sname} imgsrc={val.src} link={val.link} titles={val.title} />
            ))}
        </div> */}
        
        <h1>{count}</h1>
        <button onClick={IncNum}>Click Me</button>
        <h1>{count1}</h1>
        <button onClick={IncNum1}>Click Me</button>
        
        
        </>

        
    );
}

export default App;