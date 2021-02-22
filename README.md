# Surreal Estate Property Search App 

A property listing app built with React.

### :computer_mouse: **[View the live site here](https://samtovey-surreal-estate.netlify.app/)** ###

View available properties and add a new one to see it appear under the listings. You can filter listings by city or search for keywords. You can also sort properties by price, ascending or descending.

Unlock additional features by logging in with Facebook. You can then save properties to your Favourites by clicking the ':purple_heart: Save' button. Navigate to the Favourites tab to view and remove saved properties, and view property details in a pop up by clicking the title.

### *Browser View*
![browser view](/browser-screenshot.png)

### *Mobile View*
![mobile view](/mobile-screenshot.png)

### *Add Property Form*
![add proverty form view](/add-property-screenshot.png)

### *Favourites*
![favourites view](/favourites-screenshot.png)

### *View favourites in a popup*
![favourites popup](/favourites-popup-screenshot.png)

## Run locally

To run the app locally, clone this repo and run:\
`npm i`\
`npm start`.

## Testing
This app uses:\
* Jest
* React Testing Library
To run all tests in watch mode:\
`npm test`

## Dependencies
This project was built with create-react-app. It uses:
* React Hooks
* React Router
* Axios
* qs
* PropTypes
* React Facebook Login
* Font Awesome Icons

## API
The live version of this project calls a live API deployed to Heroku.\
\
If you wish to play around with the app in dev mode, it is recommended to create your own database and run the API locally, for example using Docker. Follow the instructions in the [API repo](https://github.com/samtovey13/surreal-estate-api) to set this up.\
\
Don't forget to also change your frontend API setup in **/src/requests/index.js** to call `localhost` instead of the live API.

## Areas for development
* Expand testing suite and use of PropTypes
* Replace alerts with modal popup to improve user experience
* Add functionality to upload a photo for each property on the form

## Author
Created by Sam Tovey as part of the [Manchester Codes](https://github.com/MCRcodes) Bootcamp programme.