import React, { useEffect, useState } from 'react'
import './App.css'

function DigitalClock() {
    const [date,setDate] = useState(new Date());
    
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    useEffect(()=>{
        const myInterval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return ()=>{
            clearInterval(myInterval);
        }
    },[date])

    return (
        <div id="clock">
            <p>{hour}</p>
            <hr />
            <p>{minute}</p>
            <hr />  
            <p>{second}</p>
        </div>
    )
}

export default DigitalClock