const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const Port = 8080;
const cookieSession = require("cookie-session");

//DATABASE 
const db = require('./database');

//EXPRESS CONFIGURATION
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(
  cookieSession({
    name: "session",
    keys: ["my cookie"],
    httpOnly: false,
  })
);

//ROUTES
App.get('/api', (req, res) => 
res.json({
  "users": ["ava", "brandon", "snowie"]
}));

//Post router for add new users to the datebase
App.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body)
  const query = `
  INSERT INTO users 
    (name, email, password)
  VALUES
    ($1, $2, $3)
  RETURNING *;
  `;
  return db
    .query(query, [username, email, password])
    .then(({ rows: users }) => {
      res.json(users)
    })
    .catch(err => console.log('err from post register', err))
})

//GET ALL API ROUTES
const apiRoutes = require("./api-routes");
App.use("/api", apiRoutes)


App.listen(Port, () => {
  console.log(`listening to port ${Port} 👍`)
})