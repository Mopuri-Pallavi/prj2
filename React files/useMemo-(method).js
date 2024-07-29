import React, { useState,useMemo } from 'react';
export default function Increment() {
    const [count, setCount] = useState(0);
    const [inc, setInc] = useState(100);
    const P = () => {
     setCount(count + 1);
    };
     const P1 = () => {
     setInc(inc - 1);
    };
   // const multiply=()=>{
     // return count*5
    //}
    const multiplication=useMemo(function multiply(){
      console.log("Pallavi")
      return count*10
    },[count])
   return (
        <div>
          {multiplication}
          <br/>
            <button onClick={P}>ADD: {count}</button>
            <br/>
            <button onClick={P1}>Del :{inc}</button>
        </div>
    );
}
 
 
 