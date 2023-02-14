import React from "react";

//Styles
import '../Styles/Result.css';

function ResultOfPredictor(props){
   
    return(
        <div id="resultContainer">

            <div id="resultCard">
                <h3>Plate: {props.plate}</h3>
                <h4>Day: {props.day}</h4>
                <h4>Hour: {props.hour}</h4>
            </div>
        </div>

    );

}


export default ResultOfPredictor;