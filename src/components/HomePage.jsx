import React,{useState,useEffect} from "react";
import "../styles/HomePage.css"
import axios from "axios";

export const HomePage =()=>{
    const [name, setName] = useState("");




    return(
        <div className="main">
            <div className="GenerateCatFacts">
              <button className="btn">Generate Cat Facts</button>
              <p></p>
            </div>
            <div className="PredictAge">
                <label htmlFor="">Enter Name of the individual</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(event)=>{
                    setName(event.target.value)
                  }}
                />
               <button className="btn">Predict Age of {name}</button>
               <h3>The predicted age of Name is Age</h3>
            </div>
        </div>
    )
}