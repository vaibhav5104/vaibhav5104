import React from "react";
import City from "./City";
import '../style.css';

const Home = () => {
    return(
        <>
            <header id="home">
            <div className="header-content">
                <h2 id="quote">Explore the World with Eco Travel</h2>
                <div className="line"></div>
                <h1>START YOUR PERSONALISED JOURNEY</h1>
                {/* <a
                    href="#about"
                    className="ctn"
                    onclick='removeall(); $("#quad").css("border", "2px solid whitesmoke"); $("#quad").css("border-radius", "20px");'
                    >Learn more</a
                >
                 */}
            </div>
        </header>
        <City/>
        </>
    );
}

export default Home;