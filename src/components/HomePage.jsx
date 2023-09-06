import React,{useState,useEffect} from "react";
import "../styles/HomePage.css"
import axios from "axios";

export const HomePage =()=>{
  const [catFacts,setCatFacts] = useState("Random cat facts appear here");
  const [name, setName] = useState(" ");
  const [age,setAge] = useState(0)

    //function to fetch the data from the random cat facts API
    const randomCatFacts=()=>{
        axios.get("https://catfact.ninja/fact").then((res)=>{
            setCatFacts(res.data.fact);//res.data ===fetches all the data from the object. fact= a specic data in the data object
        });
    };
    
    //function to fetch the data from the Predict Age API 
    const predictAge =()=>{
      axios.get(`https://api.agify.io/?name=${name}`).then((response)=>{
       console.log(response.data.age);
      });
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
               <button className="btn" onClick={predictAge}>Predict Age of {name}</button>
               <h3>The predicted age of {name} is {age}</h3>
            </div>
        </div>
    )
}