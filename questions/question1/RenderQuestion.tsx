import React from 'react'
import {compose} from './Compose.ts'
import { createRateLimitedScheduler } from './Limiting.ts';
import { validateRequiredFields } from './RequiredKeys.ts';
interface User {
    id: string;
    name: string;
    email: string;
    age?: number;  // Optional field
    phone?: string; // Optional field
  }
  
const invalidUser: Partial<User> = {
    id: '456',
    // name is missing
    email: undefined
  };
  
function RenderQuestion(){
const add5 = (x: number): number => x + 5;
const multiply3 = (x :number):number => x * 3;
const square = (x: number):number => x * x;
    return(
    <>
        <h2>Question Required Keys</h2>
        <div style={{paddingTop:'10px'}}> 
            <button className="btn" onClick={() => {validateRequiredFields(invalidUser)}} >Question Required Keys console.log states</button>
        </div>
        <h2>Question Compose</h2>
        <div style={{paddingTop:'10px'}}> 
            <button className="btn" onClick={() => {compose(add5,multiply3,square)}} >Question Compose</button>
        </div>
        <h2>Question Limiting</h2>
        <div style={{paddingTop:'10px'}}> 
            <button className="btn" onClick={() => {createRateLimitedScheduler(()=>{console.log('resolved')} , 4 , 3000)}} >Question 1.3 click to block view in console log</button>
        </div>
    </>
    )
}

export default RenderQuestion