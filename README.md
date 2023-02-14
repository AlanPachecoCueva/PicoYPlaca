# Pico y Placa Predictor  -  Alan Pacheco
Web application to predict the "pico y placa" day of a car during a specific day and hour.


### What is "Pico y Placa"
"Pico y Placa" is an strategy implemented in order to decrease the traffic problems in Quito,
so depending on the day, the hour and your car's plate you won't be able to road.

## How it's works?
It works depending on the day, the hour and the last digit of your plate

Schedules to not to road
- **Plate**      **Day**       **Morning**       **Evening**
-   1, 2         Monday        7:00 - 9:30      16:00 - 19:30
-   3, 4         Tuesday       7:00 - 9:30      16:00 - 19:30
-   5, 6         Wednesday     7:00 - 9:30      16:00 - 19:30
-   7, 8         Thursday      7:00 - 9:30      16:00 - 19:30
-   9, 0         Friday        7:00 - 9:30      16:00 - 19:30
-   ----         Saturday           -                 -      
-   ----         Sunday             -                 -      


## Setting up the project
To start the environment, first of all you need to have installed the tools specified in "Developers config" section.

### npm install
Run that in the project folder to install the dependencies.

### npm start 
Run that into the project folder called "picoyplacaapp".
That will run the application in a provisional server at: [http://localhost:3000](http://localhost:3000) 

---------------Developers config  --React-- ----------------
Is necessary to have Node.js installed.
1. Install Node.js and npm  (Node package manager)

-------------- Libraries  used
-- Date Picker
1. npm install react-datepicker