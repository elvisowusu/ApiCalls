import React,{useState,useEffect} from "react";
import "../styles/HomePage.css"
import axios from "axios";

export const HomePage =()=>{
    const [name, setName] = useState(" ");
    const [catFacts,setCatFacts] = useState("Random cat facts appear here");

    const randomCatFacts=()=>{
        axios.get("https://catfact.ninja/docs/api-docs.json").then((res)=>{
            console.log(res.data);
        })
    }



    return(
        <div className="main">
            <div className="GenerateCatFacts">
              <button className="btn" onClick={randomCatFacts}>Generate Cat Facts</button>
              <p>{catFacts}</p>
            </div>
            <div className="PredictAge">
                <label htmlFor="">Enter Name of the individual</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(event)=>{
                    setName(event.target.value);
                  }}
                />
               <button className="btn">Predict Age of {name}</button>
               <h3>The predicted age of Name is Age</h3>
            </div>
        </div>
    )
}