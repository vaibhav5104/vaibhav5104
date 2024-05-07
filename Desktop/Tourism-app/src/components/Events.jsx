import React from "react";
import img2 from '../img/img2.jfif';
import img1 from '../img/img1.jfif';
import '../style.css';
import '../responsive.css';

const Event = () => {

    return(
        <>
        <section className="events" id="events">
            <div className="container">
                <div className="title">
                    <h1 className="dark">Upcoming Events</h1>
                    <div className="line"></div>
                </div>
                <div className="row">
                    <article className="card col">
                        <img className="card-img" src={img1} />
                        <h4 className="dark">Everest camp trek</h4>
                        <p className="font-color">
                            Everest base camp trek is without a doubt, one of
                            the most renowned travel destinations in the world.
                        </p>
                        <a href="#" className="ctn">All Details</a>
                    </article>
                    <article className="card col">
                        <img src={img2} />
                        <h4 className="dark">Walking holidays</h4>
                        <p className="font-color">
                            Join small guided group walks, enjoy a challenging
                            trek, or a luxury private guided walk which can be
                            made especially for you.
                        </p>
                        <a href="#" className="ctn">All Details</a>
                    </article>
                    <article className="card col">
                        <img src={img2} />
                        <h4 className="dark">Andaman Beaches</h4>
                        <p className="font-color">
                            Diving in Andaman Beaches is exceptional. The costal
                            belt surroundings is one of the richest coral reef
                            ecosystems in the world.
                        </p>
                        <a href="#" className="ctn">All Details</a>
                    </article>
                </div>
            </div>
        </section>
        </>
    );


}

export default Event;