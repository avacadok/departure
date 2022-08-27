const express = require("express");
const router = express.Router();

//Database queries
const db = require('./database');

//Display products that are added to the psql within last 3 months (New Arrivals/all products)
router.get("/new-arrivals", (req, res) => {
  const query = `
    SELECT 
      pp.product_id,
      p.name,
      p.description,
      p.price_cents,
      p.material,
      p.size,
      p.category,
      p.color,
      ARRAY_AGG(pp.url) AS list_of_pictures
    FROM products AS p
    INNER JOIN product_pictures AS pp
      ON p.id = pp.product_id
    GROUP BY 
      1, 2, 3, 4, 5, 6, 7, 8
    ;`;
  return db
    .query(query)
    .then(({ rows: products }) => {
      res.json(products);
    })
    .catch(err => console.log("err from /new-arrivals", err))
});

//Get all the bags from products
router.get("/bags", (req, res) => {
  const query = `
  SELECT * FROM products
  WHERE category LIKE 'bag';
  `;
  return db
    .query(query)
    .then(({ rows: bags }) => {
      res.json(bags);
    })
    .catch(err => console.log("err from /bags", err))
});

module.exports = router;