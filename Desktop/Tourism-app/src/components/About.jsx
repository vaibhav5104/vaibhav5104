import React from "react";
// import img2 from '../img/img2.jfif';
// import img1 from '../img/img1.jfif';
import '../style.css';
import '../responsive.css';
import img1 from "../img/carousel-img4.jpg";
import img2 from "../img/carousel-img5.jpg";
import img3 from "../img/carousel-img6.jpg";

const About = () => {

    return(
        <>
        <section id="about">
            <div className="title">
                <h1 className="font-color">About Us</h1>
                <div className="line"></div>
            </div>
            <br />
            <div id="about_us">
                <div className="boxx">
                    <div className="containerx">
                        <input type="radio" name="slider" id="item-1" checked />
                        <input type="radio" name="slider" id="item-2" />
                        <input type="radio" name="slider" id="item-3" />
                        <div className="cards">
                            <label className="cardt" htmlFor="item-1" id="col-img-1">
                                <img src={img1} />
                            </label>
                            <label className="cardt" htmlFor="item-2" id="col-img-2">
                                <img src={img2} />
                            </label>
                            <label className="cardt" htmlFor="item-3" id="col-img-3">
                                <img src={img3} />
                            </label>
                            
                        </div>
                    </div>
                    <span id="about-quad">
                        <a href="#home">
                            <center>
                                <h1
                                    style={{
                                        fontFamily: 'var(--ff-montserrat)',
                                        color: 'white'
                                    }}
                                >
                                    Find that
                                </h1>
                                <br />
                                <img
                                    className="img2"
                                    src="./img/mountain_dark.jpg"
                                    width="200"
                                    style={{ borderRadius: '12%' }}
                                />
                                <br />
                                <h1 className="logo" style={{ fontSize: '50px' }}>
                                    ADVENTURE
                                </h1>
                            </center>
                        </a>
                    </span>
                </div>
            </div>
        </section>
        </>
    );
}

export default About;
