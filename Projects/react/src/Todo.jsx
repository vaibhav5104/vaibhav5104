/* import { useState } from "react"
import React from 'react'
import Items  from "./items"

const Todo = () => {

    const [item,setItems] = useState("")
    const [finalItem,setFinalItem] = useState("")
    
    InputEvent = (event) => {
        setItems(event.target.value)
    }

    const onSubmits = (event) => {
        event.preventDefault();

        setFinalItem(item);
        return(
            <Items items={finalItem} />
        )

    }

    return(
        <>
            <div className="todo-container">
                <div className="header">
                    <h1>ToDo List</h1>

                    <div className="section">
                    <form onSubmit={onSubmits}>

                        <input
                            type='text'
                            placeholder='Add a Items'
                            onChange={InputEvent}
                            name="item"
                            value={item}
                        />
                          <button className="check-btn" type='submit'></button>
                          <br/>
                        </form>

                        


                    </div>




                </div>

            </div>


        </>
    )


}


export default Todo */

import React, { useState } from "react";
import TodoList from "./TodoList";


const Todo = () => {
const [item,setItem] = useState("")
const [finalItem,setFinalItem] = useState([])
 
    InputEvent = (event) => {
        setItem(event.target.value)
    }

    // const onSubmits = (event) => {
        // setFinalItem(item)
    // }

    const listOfItems = () => { 
        
        setFinalItem((oldItems) => {
            return [...oldItems,item]
        })

        setItem("")
    }

    const deleteItems = (id) => {
    //  console.log("HI");  
     
     setFinalItem((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })


    }

    return <>


        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" placeholder="Add a Items" onChange={InputEvent} name="item" value={item}/>
                <button onClick={listOfItems}>+</button>
                

                <ol>
                {/* <li>{finalItem} </li> */}

               {/* Items.map(current_value,index_of_current_value,array,this ) */}
               { 
                finalItem.map((itemval,index) => {
                    return (
                        <TodoList 
                        key={index}
                        id={index} 
                        text={itemval} 
                        onSelect={deleteItems}
                        />
                    )
                    
                })}

            </ol>
                


            </div>
        </div>

    </>


}
export default Todo