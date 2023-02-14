
function analizeHour(hour){
    //Schedule 7:00am - 9:30am / 16:00pm - 19:30
    hour = hour.split(":");
    //Hours
    if(hour[0] >= 7 && hour[0] <= 9){

        if(hour[0] == 9 && hour[1] <= 30){
            //Está en pico y placa
            return "1";
        }
        
    }

    if(hour[0] >= 16 && hour[0] <= 19){
        if(hour[0] == 19 && hour[1] <= 30){
            //Está en pico y placa
            return "2";
        }
    }

    return 0;
}

export function predictPlate(plate, day, hour){
    

    //Monday: 1, 2
    if(day == "Monday" && plate[plate.length - 1] == "1" || plate[plate.length - 1] == "2"){
        analizeHour(hour);
    }
    //Tuesday: 3, 4
    if(day == "Tuesday"){


    }
    //Wednesday: 5, 6
    if(day == "Wednesday"){


    }
    //Thursday: 7, 8
    if(day == "Thursday"){


    }
    //Friday: 9, 0
    if(day == "Friday"){


    }


    


    if(plate[plate.length - 1] == 1){

    }
    
}

export function validateHour(hour){
    //The hours are in 24 hours format, and need to be separated by ":"
    console.log("Hour: ", hour);

    //Validate symbol ":
    if(!hour.includes(":")){
        return "The hour needs to have the character ':' between hours and minutes.";
    }

    
    //Separate the characters of the hour by ":"
    let separated = hour.split(":");

    //The hour can't have letters
    let haveLetters = /[a-zA-Z\!@#\$%\^\&*\)\(+=._-]/.test(separated[0]);
    let haveLetters2 = /[a-zA-Z\!@#\$%\^\&*\)\(+=._-]/.test(separated[1]);

    //If the hour haven't letters or symbols is correct
    if(haveLetters || haveLetters2){
        return "The hour can't have letters or symbols.";
    }

    //The hours needs to have at least one character, but not more than 2
    if(separated[0].length < 1 || separated[0].length > 2){
        return "The hours should have 1-2 characters.";
    }


    //The same, the minutes can have between 1 and 2 characters
    if(separated[1].length < 1 || separated[1].length > 2){
        return "The minutes should have 1-2 characters.";
    }

    //Validate the maximun number 23 for the hours and 59 for the minutes
    //To hours
    if(parseInt(separated[0]) > 23){
        return "The day has only 23:59 hours.";
    }

    //To minutes
    if(parseInt(separated[1]) > 59 || parseInt(separated[1]) < 0){
        return "Please write number only between 0-59.";
    }

    //If all its correct return true
    return true;

 
}

export function validateLicensePlate(plate){
    //Let's to validate a plate
    
    //In Ecuador the License plates are composed by 3 letters, a "-" and three o four numbers
    
    //The plates have's minimun 6 characters, 3 letters, a optional middle dash and minimun 
    //three and maximun four numbers

    //Minimun of 6 characters
    if(plate.length < 6){
        return "Not enought characters."
    }
    
    //Get the three first characters of the plate string
    let letters = plate.substring(0, 3); 
        
    //Template string to verify that the first three letters are only letters and not numbers
    let isLettersOnly = /^[a-zA-Z]+$/.test(letters);

    //If there are only letters
    if(!isLettersOnly){
        return "The format is invalid. Example: ACD-4125.";
    }

    //Let's verify if contains a middle dash
    if(plate.includes("-")){
        //If includes, let's to remove them
        plate = plate.replace("-", "");
    }
            
    //Get only the numbers at the end of the plate
    let numbers = plate.substring(3);  

    //If all the characters are numbers and contains between 3 and four numbers
    let areNumbers= /^\d+$/.test(numbers);

    if(areNumbers && numbers.length >= 3 && numbers.length <= 4){
        //Return true, because the plate is valid
        return true;
    }else{
                
        //If the characters thath should be numbers are letters or symbols
        let areLetters = /[a-zA-Z\!@#\$%\^\&*\)\(+=._-]/.test(numbers);
        if(areLetters){
            return "The characters after the three initial letters needs to be numbers and not have more letters.";
        }

        return "A plate has at least 3 numbers and maximun 4.";
    }
}

//Needs a number between 0 and 6, where 0 is sunday, 1 is monday and 6 is saturday
export function dayConverter(number){
    switch(number){
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 0:
            return "Sunday";
        default:
            return "Invalid";
    }
}





