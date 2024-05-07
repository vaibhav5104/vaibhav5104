import React, { useState } from "react";
import "../style.css";
import "../responsive.css";
import TourResult from "./TourResult";

const Tours = ({ finalCity }) => {
  console.log(finalCity);
  const [budgetValue, setBudgetValue] = useState();
  const [daysValue, setDaysValue] = useState();
  const [totalVal, setTotalVal] = useState();

  const budgetInputChange = (event) => {
    setBudgetValue(event.target.value);
  };

  const daysInputChange = (event) => {
    setDaysValue(event.target.value);
  };

  const onSubmit = () => {
    setTotalVal({
      budget: budgetValue,
      days: daysValue
    });
  };

  return (
    <>
      <section className="events" id="events">
        <div className="container">
          <div className="title">
            <h1 className="dark">Tours</h1>
            <div className="line"></div>
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Your Budget"
            onChange={budgetInputChange}
            value={budgetValue}
          />
          <input
            type="text"
            placeholder="Number of Days"
            onChange={daysInputChange}
            value={daysValue}
          />
          <button className="Tbtn" onClick={onSubmit}>
            Enter
          </button>
        </div>

        <div className="Tcard">
          <TourResult totalVal={totalVal} finalCity={finalCity} />
          {/* <TourResult1 totalVal={totalVal} finalCity={finalCity}></TourResult1> */}
        </div>
      </section>
    </>
  );
};

export default Tours;
