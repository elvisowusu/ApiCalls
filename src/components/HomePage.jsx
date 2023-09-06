import React,{useState,useEffect} from "react";
import "../styles/HomePage.css"
import axios from "axios";

export const HomePage =()=>{




    return(
        <div className="main">
            <div className="GenerateCatFacts">
              <button className="btn">Generate Cat Facts</button>
              <p></p>
            </div>
            <div className="PredictAge">
                <label htmlFor="">Enter Name of the individual</label>
                <input type="text" />
               <button className="btn">Predict Age</button>
               <h3>The predicted age of Name is Age</h3>
            </div>
        </div>
    )
}