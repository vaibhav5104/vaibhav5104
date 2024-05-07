import React from "react";
import '../style.css';
import '../responsive.css';

const Contact = () => {
    return(
        <>
            <section id="contact">
            <div className="title">
                <h1 className="font-color">Contact Us</h1>
                <div className="line"></div>
            </div>
            <div className="contact_us">
                <form className="cform" action="" method="post">
                    <div className="crow-message">
                        <h1 className="color">Send us a message</h1>
                        <div></div>
                    </div>
                    <div className="crow-in">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                        />
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Your Email id"
                        />
                    </div>
                    <div className="crow">
                        <div className="ccol-left">
                            <select name="country" id="country">
                                <option value="India">India</option>
                                <option value="Russia">Russia</option>
                                <option value="usa">USA</option>
                                <option value="Japan">Japan</option>
                                <option value="France">France</option>
                                <option value="Brazil">Brazil</option>
                            </select>
                        </div>
                    </div>
                    <div className="crow">
                        <div className="ccol-left">
                            <textarea
                                type="text"
                                id="remarks"
                                name="remarks"
                                placeholder="Your Remarks....."
                                style={{ height: '150px' }} // Corrected syntax for inline style
                            ></textarea>
                        </div>
                    </div>
                    <input className="crow-s" type="submit" value="Submit" />
                </form>
                <div className="cbox">
                    <div>
                        <p className="cbox-message">
                            Prefer some other way ?<br />Reach us by using the
                            details given below
                        </p>
                        <div className="cbox-line"></div>
                    </div>
                    <div className="c_boxx">
                        <a href="mailto:abc@gmail.com"
                            ><i className="fa fa-envelope"></i>
                            Mail: yashdubeyssk@gmail.com
                        </a>
                    </div>
                    <div className="c_boxx">
                        <a href="tel:+91-8847518402"
                            ><i className="fa fa-phone"></i>
                            Phone: (+91) 88475-18402
                        </a>
                    </div>
                    <div className="c_boxx">
                        <a href="#"
                            ><i className="fa fa-map-marker"></i>
                            Location: Kapurthala,Punjab,India
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Contact;
