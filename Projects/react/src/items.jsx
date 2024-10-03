import "./style.css"
import React from 'react';


function Items({ items }) {
    return(
        <>
            <div className="todo-item">
                <h1 className="checkList">{items}</h1>


                <button className="delete-btn"></button>


            </div>


        </>
    );

}


export default Items;