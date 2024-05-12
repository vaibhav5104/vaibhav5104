import React from 'react';
import '../style.css';
import '../responsive.css';
import img2 from '../img/jaipur data.jfif';
import img3 from '../img/jaipur 5 (1) 6.jfif';
import img1 from '../img/beauty_of_jaipur 1 (1) 2.jfif';

function JaipurGallery() {
  return (
    <>
      <section className="events" id="events">
            <div className="container">
                <div className="title">
                    <h1 className="dark">Jaipur City</h1>
                    <div className="line"></div>
                </div>
                <div className="row">
                    <article className="card col">
                        <img className="card-img" alt='' src={img1} />
                        <h4 className="dark">Enjoy Your Stay</h4>
                        <p className="font-color">
                        Jaipur : A city of contrasts, where tradition meets innovation, and 
                        every corner offers a new adventure.
                        </p>
                        {/* <a href="#" className="ctn">All Details</a> */}
                    </article>
                    <article className="card col">
                        <img src={img2} alt=''/>
                        <h4 className="dark">Local Etiquette</h4>
                        <p className="font-color">
                        Learn a phrases and familiarize yourself with local customs to enhance your 
                        cultural experience in Jaipur.
                        </p>
                        {/* <a href="#" className="ctn">All Details</a> */}
                    </article>
                    <article className="card col">
                        <img src={img3} alt='' />
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
  )
}

export default JaipurGallery;