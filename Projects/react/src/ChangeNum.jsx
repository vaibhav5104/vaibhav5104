import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './style.css';
import Slider from '@mui/material/Slider';

const ChangeNum = () => {

    const [num,setNum] = useState(0);


    InputEvent = (event) => {
        setNum(Number(event.target.value))
    }

    const Increm = () => {
        
        setNum(num => num + 1)
    }

    const Decrem = () => {
        if(num == 0) alert("Zero limit reached")
            else setNum(num => num - 1)
        
    }
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
          event.preventDefault();
        }
      };


    return (
    <>


        <div className="middle">
        <input 
            type="number"
            placeholder=""
            onChange={InputEvent}
            name="num"
            value={num}    
            onKeyDown={handleKeyDown}         

        />

        <div>
            <Button onClick={Increm} >
            <AddIcon color="secondary" fontSize="large" style={{fill: "green"}} />
            </Button>
            <Button onClick={Decrem} className="btn-component"><RemoveIcon/></Button>
            <Slider
                defaultValue={30}
                sx={{
                    width: 200,
                    color: 'success.main',
                }}
                />
        </div>

        </div>
        


    </>);
}

export default ChangeNum