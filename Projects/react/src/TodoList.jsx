import React from "react";

const TodoList = (props) => {
    

return(<>

    <div className="todo_style ">
    <i className="fa fa-times-circle" 
    onClick={() => {
        props.onSelect(props.id)
    }} ></i>
    <li>{props.text}</li>

    </div>

</>) 
      
}

export default TodoList