/* import React from "react";
import { Route,Routes } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Navbar from "./Navbar";
import User from "./User";

const App = () => {

    // const Name = () => {
        // return <h1>This is Name page</h1>
    // }
    // <Route path="/:fname/:lname" element={<User name="User"/>}/>  done by useParam Hook
    

    return (
    <>
        <Navbar/>
        <Routes>
                <Route path="/" element={<About name="About"/>} />
                <Route path="/Contact" element={<About name="Contact"/>} />
                <Route path="/Contact/Name" element={<About name="Name"/>} />
                <Route path="/:fname/:lname" element={<User name="User"/>}/> 
                <Route path="*" element={<Error />} />
        </Routes>
    </>)
}

export default App */

import React from "react";
import { Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About"
import Contact from "./Contact"
import Home from "./Home";
import Error from "./Error"
import User from "./User";

const App = () => {

    return(<>

        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/About" element={<About name="About"/>}/>
            <Route path="/Error" element={<Error/>}/>
            {/* <Route path="/Vaibhav/Sharma" element={<User name="vaibhav sharma"/>}/> */}
            <Route path="/:fname/:lname" element={<User name="User"/>}/> 
        </Routes>

    </>)
}

export default App;