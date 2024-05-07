import React from "react";
import DubaiGallery from "./DubaiGallery";
import GoaGallery from "./GoaGallery";
import Tours from "./Tours";


const CityResult = ({finalCity}) => {

    if(finalCity && finalCity.toLowerCase() === "dubai"){
        return(
            <>
                <div className="Ccard">
                <DubaiGallery/>
                <Tours/>
                </div>
            </>
        );
    }else if(finalCity && finalCity.toLowerCase() === "goa"){
        return(
            <>
    
                <div className="Ccard">
                <GoaGallery/>
                <Tours/>
                </div>
    
            </>
        );
    }else if(finalCity && finalCity.toLowerCase() === "jaipur"){
        return(
            <>
    
                <div className="Ccard">
                <JaipurGallery/>
                <Tours/>
                </div>
    
            </>
        );
    }

}

export default CityResult;

