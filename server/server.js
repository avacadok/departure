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
    httpOnly: true,
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
});

//Post request for user login
App.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  const query = `
  SELECT 
    email, 
    password, 
    id
  FROM 
    users
  WHERE 
    email = $1
    AND password = $2;
  `;
  return db
    .query(query, [email, password])
    .then(({ rows: user }) => {
      console.log("user", user)
      if (user.length > 0) {
        res.send(user)
      } else {
        res.send({ error : "Please enter a valid email and password" });
      }
    })
    .catch(err => console.log('err from post login', err))
});

//GET ALL API ROUTES
const apiRoutes = require("./api-routes");
const { response } = require('express');
App.use("/api", apiRoutes)


App.listen(Port, () => {
  console.log(`listening to port ${Port} 👍`)
})