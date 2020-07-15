/* 
TO RUN THE CODE:
1. open the terminal and type: npm install    ***this is to install the packages (dependencies) in node_modules***   
2. 
+ If you don't have nodemon installed, type: npm install -g nodemon
   - after this, restart your VS code or terminal
+ If you do, type: nodemon server
+ Or you can just type: npm start
*/

//import the express package and store it in "express" constant
const express = require("express");

//create an app from the express package
const app = express();

//use express.json() middleware (this is two convert the request body)
app.use(express.json());

//pretend that this is our database which contains the following data
const movies = [
  { title: "Harry Potter", price: "1$", id: 0 },
  { title: "Conjuring", price: "2$", id: 1 },
  { title: "Annabelle", price: "2$", id: 2 },
  { title: "Insidious", price: "1$", id: 3 },
];

//specify the routes (API endpoints) GET POST PUT DELETE...
/*to create an endpoint (route), we use app.REQUEST_TYPE() 
    EX: app.get() , app.post(), app.put(), etc
    - this takes in two arguments as well, the route name and the function which takes request and response as arguments
*/

app.get("/", function (req, res) {
  res.send("Welcome to Major Cineplex!!!");
});
app.get("/movies", function (req, res) {
  //return the list of all movies
  return res.json(movies);
});
app.get("/movies/:id", function (req, res) {
  //dynamic routing
  //use the dynamic :id to query a particular movie
  const movie = movies.find((m) => m.id == req.params.id);
  return res.json(movie);
});

app.post("/movies", (req, res) => {
  //pull the properties from request body. This could be easier achieved through destructuring
  const title = req.body.title;
  const price = req.body.price;
  const id = req.body.id;
  const newMovie = { title: title, price: price, id: id };
  movies.push(newMovie);
  return res.json(movies);
});
app.post("/payment", (req, res) => {
  res.send("Please make your payment");
});

//start server
// to start the server, we use app.listen() function which takes in 2 arguments. the first arguement is the port on which we want to run on. the second argument is a function which will run when the app.listen function is called

const PORT = 3000;
app.listen(PORT, function () {
  console.log("server is running on port 3000...");
});
