import React, { useMemo, useState } from 'react'

function Counter() {
    const[counterOne,setCounterOne]=useState(0);
    const[counterTwo,setCounterTwo]=useState(0);

    let incrementOne=()=>{
        setCounterOne(counterOne+1);
    };
    let incrementTwo=()=>{
        setCounterTwo(counterTwo+1);
    };

    let isEven=useMemo(()=>{
        console.log("evenodd function excecuted");
        let i=0;
        while(i<200000000) i++;
        return counterOne%2==0;

    },[counterOne]);

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Counter one:{counterOne}</button>
                <span>{isEven?"even":"odd"}</span>

            </div>
            <button onClick={incrementTwo}>Counter one:{counterTwo}</button>
            
        </div>
    )
}

export default Counter
