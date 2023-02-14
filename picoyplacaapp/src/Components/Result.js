import React from "react";

//Styles
import '../Styles/Result.css';

function ResultOfPredictor(props){

    const handleDisplay = () =>{
        console.log("Entra");
        props.setDisplay("none");
    }


    return(
        <div id="resultContainer">
            <input type="button" id="resultButton" value="X" onClick={handleDisplay}></input>
            <h3>Plate: {props.plate}</h3>
            <h4>Day: {props.day}</h4>
            <h4>Hour: {props.hour}</h4>
        </div>

    );

}


export default ResultOfPredictor;