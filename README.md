# moonsighting.com Prayer Times API

  

This project is an example for how to integrate moonsighting.com prayer times to any website using the API generated JSON output. The example project is written in Angular 9.

  

## API Documentation

  

The API is very simple, it consists of a signle endpoint and requires the following parameters:
| Parameter    |Value            |
|--------------|-----------------|
|Year|4 digits number eg: 2020
|tz  |Timezone in this format: Asia/Riyadh      
|lat |Latitude in Decimal degrees format
|lon |Longitude in Decimal degrees format
|both| 0 or 1, if 1, Aser prayer is shown in two different calculation methods
|time|  0 for 24 hours time format and 1 for 12 hours time format
|method| single digit that represents the available calculation methods which are thet following
---------------
| Entry    |Calculation Method            |
|--------------|-----------------|
|0|Hanafi general
|1  |Hanafi Shafag Abyad      
|2 |Shafi Shafag Ahmar
|3 |Shia Jafari
---------------



An example of a correct API call is:



    https://www.moonsighting.com/time_json.php?year=2020&tz=Asia/Riyadh&lat=26.574848&lon=50.0105216&method=0&both=false&time=0

## Integration Example
Find an example of a web page that displays a timetable using our API
url  
  
https://prayertimeresearch.github.io/PrayerTimeAPI/