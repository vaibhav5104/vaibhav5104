import React, { useEffect, useState } from "react";


const App1 = () => {
    const [num,setNum] =  useState(7)
    const [nums,setNums] =  useState(7)

    useEffect(() => {
        alert("I am clicked")
        
        console.log("hi");
    },[num])
    
    useEffect(() => {
        // alert("I am clicked")
        document.title = `you clicked me ${nums} times` 
        // console.log("hi");
    },[nums])
    


    return <>

    <button onClick={() => {
        setNum(num +1)
    }}>{num}</button>

    <button onClick={() => {
        setNums(nums *2131)
    }}>{nums}</button>

    <title>Hiiii</title>

    </>
}

export default App1