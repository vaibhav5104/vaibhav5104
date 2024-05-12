import React from "react";
import '../style.css';
import '../responsive.css';

const Explore = () => {
    return(
        <>
            <section className="explore" id="explore">
            <div className="explore-content">
                <h1>SUSTAINABLE EXPLORATION</h1>
                <div className="line"></div>
                <p style={{ fontSize:'1.3rem'}}>
                Our website will provide the travelling suggestion as per the ones budget number of days he can spend in a particular city 
                Firstly User will input the city he want to visit then secondely he will enter the budget and then the days 
                after seeing the input our website will show a personalized suggestion as per the travaller need.
                A person can book the tickets of the main tourist destination through the suggestion they can also choose the hotels they want to stay 
                our website will also show the location on the map. we will also encourage them too travel eco friendly by opting the public transport electric vehicles etc.

                </p>
            </div>
        </section>
        </>
    );
}

export default Explore;
