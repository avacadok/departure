const express = require("express");
const router = express.Router();

//Database queries
const db = require('./database');

// display products that are added to the psql within last 3 months (New Arrivals/all products)
router.get("/new-arrivals", (req, res) => {
  const query = `
  SELECT * FROM products;
  `;
  return db
    .query(query)
    .then(({rows: products}) => {
      res.json(products);
    })
    .catch(err => console.log("err from /new-arrivals", err))
});

module.exports = router;