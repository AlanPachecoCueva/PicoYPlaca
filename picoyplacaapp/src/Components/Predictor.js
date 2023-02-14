
import React, {useState} from 'react';

//To select date
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//Styles
import '../Styles/Predictor.css';

//Functions
import * as functions from '../Functions/PredictorFunctions';

//Result component
import ResultOfPredictor from '../Components/Result';




function Predictor(){
    let colorOK = "#83b8ff";
    let colorNotOK = "red";

    //To manage the button
    const [isDisabled, setDisabled] = useState(true);
    //To manage the date
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [plate, setPlate] = useState("");
    const [hour, setHour] = useState("");

    //To errors

    //To plateError
    const [plateError, setPlateError] = useState("None");
    const [displayPlateError, setDisplayPlateError] = useState("none"); 
    const [colorPlate, setColorPlate] = useState(colorOK);
    //To hour error
    const [hourError, setHourError] = useState("None");
    const [displayHourError, setDisplayHourError] = useState("none"); 
    const [colorHour, setColorHour] = useState(colorOK);

    //To controll the predict button
    const [predictPlateOK, setPredictPlateOK] = useState(false);
    const [predictHourOK, setPredictHourOK] = useState(false);
    const [showPredict, setShowPredict] = useState(false);

    //To set the date in the useState
    const hourHandle = (event) => {
        //New hour
        setHour(event.target.value);

    };

    //To set the date in the useState
    const dateHandle = (date) => {
        setSelectedDate(date);
    };

    //To set the plate in the useState
    const plateHandle = (event) => {
        //The new plate
        setPlate(event.target.value);

    }


    const validateHour = () =>{
        //If the hour is empty
        if(hour.length === 0){
            return;
        }

        //In order to show the errors in real time:
        //let's to valid contains a boolean true o an string with the error of the plate
        let valid = functions.validateHour(hour);

        //If it's not valid
        if(valid == true){
            //Hide the error
            setColorHour(colorOK);
            setDisplayHourError("none");

            // Set the predictHourOK
            setPredictHourOK(true);

            //To activate the button
            if(predictPlateOK){
                setDisabled(false);
            }
        }else{
            //change the plate the error 
            setHourError(valid);

            //Show the error
            setColorHour(colorNotOK);
            setDisplayHourError("inherit");

            //To disable the button
            setDisabled(true);
        }

    }

    //To validate tha data and show a result, an error or the "Pico y Placa" information
    const validatePlate = () =>{
        //If the plate is empty
        if(plate.length === 0){
            return;
        }

        //Valid contains a boolean true o an string with the error of the plate
        let valid = functions.validateLicensePlate(plate);

        //In order to show the errors in real time:
        //let's to valid contains a boolean true o an string with the error of the plate

        if(valid == true){
            // let day = functions.dayConverter(selectedDate.getDay());
            // console.log("Date: ", day);

            //Hide the error
            setColorPlate(colorOK);
            setDisplayPlateError("none");

            //Set the predictPlateOK
            setPredictPlateOK(true);

            //To activate the button
            if(predictHourOK){
                setDisabled(false);
            }
        }else{
            //If the plate is not valid

            //change the plate the error 
            setPlateError(valid);

            //Show the error
            setColorPlate(colorNotOK);
            setDisplayPlateError("inherit");

            //To disable the button
            setDisabled(true);
        }
    }

    const Predict = () =>{
        validatePlate();
        validateHour();

        if(isDisabled){
            return;
        }

        setShowPredict(true);
        console.log("ee");

    }


    return(
        <div className="bigContainer">
            <div className="card">

                {/* Title */}
                <h2 className="title" >Pico y Placa Predictor</h2>


                <div id="cardInputs">

                    {/* Plate information */}
                    <div className="divInput" style={{border: `1px solid ${colorPlate}`}}>
                        <h4 className="inputTitle">Plate</h4>

                        <input placeholder="ADG-1548" type="text" className="inputItem" id="plate" onBlur={validatePlate} onChange={plateHandle}></input>

                        <p style={{ display: displayPlateError }} className="inputError">{plateError}</p>
                    </div>

                    {/* Date information */}
                    <div className="divInput">
                        <h4 className="inputTitle">Day</h4>
                        <DatePicker className="inputItem"
                            selected={selectedDate} 
                            onChange={dateHandle} 
                        />
                    </div>


                    {/* Hour information */}
                    <div className="divInput" style={{border: `1px solid ${colorHour}`}}>
                        <h4 className="inputTitle">Hour</h4>
                        <input type="text" className="inputItem" placeholder='14:00' onChange={hourHandle} onBlur={validateHour}></input>

                        <p style={{ display: displayHourError }} className="inputError">{hourError}</p>
                    </div>


                </div>


                {/* Predict Button */}
                <input type="button" className="button" value="Predict" onClick={Predict}></input>


            </div>

            {/* To show the prediction when the button is clicked */}
            {showPredict? <ResultOfPredictor plate={plate} day={selectedDate.getDay()} hour={hour}></ResultOfPredictor>  :  <div></div>}
        </div>
    );
    
}

export default Predictor;