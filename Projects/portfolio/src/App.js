import React from "react";
import Nav from "./Nav";
import { Routes,Route } from "react-router-dom";
import About from "./About"
import Contacts from "./Contacts"
import Home from "./Home";
import Projects from "./Projects";


const App = () => {

    return(
        <>
            <Nav/>
            <Routes>
            <Route path="/" element={Home} />
            <Route path="/About" element={About} />
            <Route path="/Projects" element={Projects} />
            <Route path="/Contacts" element={Contacts} />
            </Routes>
        </>
    )



}

export default App