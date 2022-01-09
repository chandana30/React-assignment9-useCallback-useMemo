import React, { useCallback, useState } from 'react'
import Button from './Button';
import Count from './Count';
import Title from './Title';

function ParentComp() {
    const[age,setage]=useState(10);
    const [salary, setsalary] = useState(1000);

    let incrementAge=useCallback(()=>{
        setage(age+1);
    },[age]);

    let incrementSalary=useCallback(()=>{
        setsalary(salary+1000);
    },[salary]);

    return (
        <div>
            <Title/>
            <Count text="Age" count={age}/>
            <Button handleClick={incrementAge}>Increment Age</Button>

            <Count text="Salary" count={salary}/>
            <Button handleClick={incrementSalary}>Increment Salary</Button>

            
        </div>
    );
}

export default ParentComp;
