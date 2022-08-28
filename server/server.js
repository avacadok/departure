const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const Port = 8080;

//DATABASE 
const db = require('./database');

//EXPRESS CONFIGURATION
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

//ROUTES
App.get('/api', (req, res) => 
res.json({
  "users": ["ava", "brandon", "snowie"]
}));

//GET ALL API ROUTES
const apiRoutes = require("./api-routes");
App.use("/api", apiRoutes)


App.listen(Port, () => {
  console.log(`listening to port ${Port} 👍`)
})