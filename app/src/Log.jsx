import axios from "axios";
import {  } from "../src/Log.css";
import { useState } from "react";

function Log() {

    const [name , setName]=useState("")
    const [pass, setPass]=useState("")
    const Arr1=useState[
        {name:"" , pass: 0}
    ]
    const sub=()=>{
        let str1="insert into `log` l values ("+name+",2244 )"
        axios.post=("https://localhost:3306/api/NonQuery",{mySQL:str1})
    }
     
    return ( 
        <>
        <div >
            <div className="Wrapper">
                <div className="insideWrapper">
                    <div className="Log">
                        <h1>LOG-IN</h1>

                        <div className="inputLogs">
                        <input id="1" value={name} onChange={(e)=>{
                            setName(e.target.value)
                            console.log(name)
                        }} placeHolder='USER' type='user' ></input>
                        <input value={pass} onChange={(e)=>{
                            setPass(e.target.value)
                            console.log(pass)
                        }} placeHolder='PASSWORD'type='password'></input>
                        <button onClick={sub()}>LOG </button>
                        
                        </div>

                    </div>
 
                </div>
            
            </div>
             
        </div>
        </>
     );
}

export default Log;