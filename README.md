h1. Weather App

h2. Requirements (By Request)

* Implement an HTML-based weather application, capable of showing the current temperature & five day forecast
* Ability to auto-detect the user's location, or have them manually select it
* Ability to switch between degrees C & F
* Built out of angular.js
* Responsive layout suitable to iPad/iPhone, portrait+landscape
* A primary focus on solid code structure, with a secondary focus on putting together a nice UI

h2. Todo

* Basic Routing (DONE)
* ng-resource for API (DONE)
* pending loading state
* prettify

h2. OpenWeather API Notes

* Current Weather Endpoint : http://api.openweathermap.org/data/2.5/weather
* Forecast Endpoint : http://api.openweathermap.org/data/2.5/forecast
* Icon List : http://openweathermap.org/weather-conditions
* Query Params :
** City ID : id=
** City Name : q=
** Lat/Lon : lat=&lon=
* City ID List : http://openweathermap.org/help/city_list.txt
* 0 Celcius : 273.15

h2. Issues/Todo:
* navigator.geolocation should only be called within secure origin (https://). App will eventually break
* Not handling unexpeced data. All code expects API to respond correctly
* Round celcius to nearest degree

h2. Notes:

