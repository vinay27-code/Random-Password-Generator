import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";


function PasswordGenerator(){

const [Password,setPassword]=useState("");
const [length,setLength]=useState(10);
const [numberChange,setNumberChange]=useState(false);
const[symbolChange,setsymbolChange]=useState(false);

function generatePassword(){
    let str="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if(numberChange==true){
        str+="0123456789"
    }
    if(symbolChange==true){
        str+="!@#$%^&*()_+=\|/{}";
    }

    let pass="";

    for(let i=0;i<length;i++)
    {
        pass+=str[Math.floor(Math.random()*str.length)];
    }

    setPassword(pass);
}


useEffect(()=>{
    generatePassword();
},[length,numberChange,symbolChange]);



    return(
        <>
        <div className="passwordGenerator">
                <h1>Password is: {Password}</h1>
                <div className="options">
                    <input type="range" min={5} max={12} value={length} onChange={(e)=>setLength(e.target.value)}></input>
                    <label >Length is:{length}</label>

                    <input type="checkbox" defaultChecked={numberChange} onChange={(e)=>setNumberChange(!numberChange)}></input>
                    <label>Numbers</label>
                    <input type="checkbox" defaultChecked={symbolChange} onChange={(e)=>setsymbolChange(!symbolChange)}></input>
                    <label>Symbols</label>
                </div>
            </div>    
        </>
    )

}







ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);