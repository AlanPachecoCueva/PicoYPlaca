# Pico y Placa Predictor  -  Alan Pacheco
Web application to predict the "pico y placa" day of a car during a specific day and hour.


### What is "Pico y Placa"
"Pico y Placa" is an strategy implemented in order to decrease the traffic problems in Quito,
so depending on the day, the hour and your car's plate you won't be able to road.

## How it's works?
It works depending on the day, the hour and the last digit of your plate

Schedules to not to road
| **Plate**    |   **Day**    |   **Morning**   |    **Evening**    |
|--------------|--------------|-----------------|-------------------|
|    1, 2      |    Monday    |    7:00 - 9:30  |    16:00 - 19:30  |
|    3, 4      |    Tuesday   |    7:00 - 9:30  |    16:00 - 19:30  |
|    5, 6      |   Wednesday  |    7:00 - 9:30  |    16:00 - 19:30  |
|    7, 8      |   Thursday   |    7:00 - 9:30  |    16:00 - 19:30  |
|    9, 0      |    Friday    |    7:00 - 9:30  |    16:00 - 19:30  |
|    ----      |   Saturday   |         -       |          -        |  
|    ----      |   Sunday     |         -       |          -        |
|--------------|--------------|-----------------|-------------------|
<br>
### Application area
<br>
<img width="457" alt="zone" src="https://www.adipiscor.com/img/uploads/images/pico_y_placa_quito.jpg">


## Setting up the project
To start the environment, please make the next:

### npm install
Run that in the project folder to install the dependencies.

### npm start 
Run that into the project folder called "picoyplacaapp".
That will run the application in a provisional server at: [http://localhost:3000](http://localhost:3000) 

