h1. Weather App

This repo contains source for a angular based weather website.

h2. Install instructions (for OSX or Linux - Windows will be similar but harder):

Prerequisites:
1. git , node (>= 0.10) and npm (>= 2.0)
2. Up to date chrome browser (Tested on OSX 10.10.4 with chrome 44.0.2403.155 )

Steps (execute each of these commands from the terminal):
1. git clone the repo URL : git clone git@github.com:kylezeeuwen/weatherman.git
1. cd weatherman
1. npm install
1. ./node_modules/bower/bin/bower install
1. ./node_modules/gulp/bin/gulp.js serve

This should cause chrome to open a tab to the URL http://localhost:9000 . The website should be visible!

h2. Site Features

1. Loads wearher for current location (if allowed)
1. Can load weather for any city/region that is searched for
1. Can save cities to build a list of frequently used cities
1. Uses URL routing so specific app states (i.e., viewing weather for Manly) can be bookmarked.
1. can switch between Celcius and Fahrenheit, and it will remember your preference

h2. Next Steps

1. Make site truly responsive to fill out a mobile viewport
2. Add detailed view for every future day in forecast - the openweathermap API provides very detailed data
3. Add some weather graphs

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
* Round celcius to nearest degree
* Incomplete bower/wiredep mgmt of bootstrap
* Not handling unexpeced data or API errors. All code expects API to respond correctly
* The C/F display is handled in a filter which pulls the preference from a service. This means that the final value is a computed value (not directly linked via data binding) and when the user preference is updated angular doesn't detect it needs to redraw the values. So I have to explicitly call a reload().

