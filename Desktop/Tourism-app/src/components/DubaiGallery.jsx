import React from 'react';
import '../style.css';
import '../responsive.css';
import img2 from '../img/img2.jfif';
import img3 from '../img/DubaiPG3.jfif';
import img1 from '../img/DubaiPG1.jfif';


const DubaiGallery = () => {

    return(
        <>
<section className="events" id="events">
            <div className="container">
                <div className="title">
                    <h1 className="dark">Dubai City</h1>
                    <div className="line"></div>
                </div>
                <div className="row">
                    <article className="card col">
                        <img className="card-img"  src={img1} />
                        <h4 className="dark">Enjoy Your Stay</h4>
                        <p className="font-color">
                        Dubai : A city of contrasts, where tradition meets innovation, and 
                        every corner offers a new adventure.
                        </p>
                        {/* <a href="#" className="ctn">All Details</a> */}
                    </article>
                    <article className="card col">
                        <img src={img2} />
                        <h4 className="dark">Local Etiquette</h4>
                        <p className="font-color">
                        Learn a few Arabic phrases and familiarize yourself with local customs to enhance your 
                        cultural experience in Dubai.
                        </p>
                        {/* <a href="#" className="ctn">All Details</a> */}
                    </article>
                    <article className="card col">
                        <img src={img3} />
                        <h4 className="dark">Safety Tips</h4>
                        <p className="font-color">Respect local customs and traditions, dress modestly in public places, and avoid 
                        public displays of affection. 
                        </p>
                        {/* <a href="#" className="ctn">All Details</a> */}
                    </article>
                </div>
            </div>
        </section>
        </>
    );

    


}

export default DubaiGallery;