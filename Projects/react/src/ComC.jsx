import React from "react";
import { FirstName , LastName } from "./App";

const ComC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                        {(lname) => {
                            return <h1>Hii Guys I am {fname} {lname}</h1>;
                        }}
                            
                        </LastName.Consumer>
                    ) 
                    
                }}
            </FirstName.Consumer>
        </>
    );
};

export default ComC;
