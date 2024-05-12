
import React from 'react';
import img1 from "../img/GitHub120px.png"
import Vaibhav from "../img/Vaibhav.png";
import Pianshu from "../img/Pianshu.png";
import Jyoti from "../img/Jyoti.png";
import Vanshika from "../img/Vanshika.png";
import Yash from "../img/YKD.png";

const Contributions = () => {
  return (
    <div>
      <div className="title">
        <h1 className="font-color">Contributors</h1>
        <div className="line"></div>
      </div>
      <section className="contributors" id="contribution">
        <div className="concard">
          <img
            src={Vaibhav}
            alt="Vaibhav"
            className="pfp"
          />
          <div className="text">
            <h1>Vaibhav Sharma</h1>
          </div>
          <div className="logolink">
            <a href="https://github.com/search?q=Vaibhav5104&type=users" target="_blank" rel="noopener noreferrer">
              <img
                src={img1}
                alt="GitHub Logo"
                className="github-logo"
              />
            </a>
          </div>
        </div>

        <div className="concard">
          <img
            src={Yash}
            alt="Yash Kumar Dubey "
            className="pfp"
          />
          <div className="text">
            <h1>Yash Kumar Dubey </h1>
          </div>
          <div className="logolink">
            <a href="https://github.com/search?q=yashdubey22&type=users" target="_blank" rel="noopener noreferrer">
              <img
                src={img1}
                alt="GitHub Logo"
                className="github-logo"
              />
            </a>
          </div>
        </div>
        <div className="concard">
          <img
            src={Pianshu}
            alt="Pianshu Verma
            "
            className="pfp"
          />
          <div className="text">
            <h1>Pianshu Verma
 </h1>
          </div>
          <div className="logolink">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img
                src={img1}
                alt="GitHub Logo"
                className="github-logo"
              />
            </a>
          </div>
        </div>
        <div className="concard">
          <img
            src={Vanshika}
            alt="Vanshika 

            "
            className="pfp"
          />
          <div className="text">
            <h1>Vanshika 

 </h1>
          </div>
          <div className="logolink">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img
                src={img1}
                alt="GitHub Logo"
                className="github-logo"
              />
            </a>
          </div>
        </div>
        <div className="concard">
          <img
            src={Jyoti}
            alt="Jyoti
            "
            className="pfp"
          />
          <div className="text">
            <h1>Jyoti
 </h1>
          </div>
          <div className="logolink">
            <a href="https://github.com/Jyoit" target="_blank" rel="noopener noreferrer">
              <img
                src={img1}
                alt="GitHub Logo"
                className="github-logo"
              />
            </a>
          </div>
        </div>
        

        
      </section>
    </div>
  );
};
export default Contributions;