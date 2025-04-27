import React from 'react'
import {compose} from './Compose.ts'
import { createRateLimitedScheduler } from './Limiting.ts';


function RenderQuestion(){
const add5 = (x: number): number => x + 5;
const multiply3 = (x :number):number => x * 3;
const square = (x: number):number => x * x;
    return(
    <>
        <h2>Question 1.2</h2>
        <div style={{paddingTop:'10px'}}> 
            <button className="btn" onClick={() => {compose(add5,multiply3,square)}} >Question 1.2 Compose</button>
        </div>
        <h2>Question 1.3</h2>
        <div style={{paddingTop:'10px'}}> 
            <button className="btn" onClick={() => {createRateLimitedScheduler(()=>{console.log('resolved')} , 4 , 3000)}} >Question 1.3 click to block view in console log</button>
        </div>
    </>
    )
}

export default RenderQuestion