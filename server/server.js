const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const Port = 8080;

//Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

//Get route
App.get('/api', (req, res) => 
res.json({
  "users": ["ava", "brandon", "snowie"]
}));

App.listen(Port, () => {
  console.log(`listening to port ${Port} 👍`)
})