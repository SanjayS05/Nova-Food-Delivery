const pool = require('../configs/db.config');
const express = require('express');

async function getFood(req, res) {
  const  rest  = parseInt(req.params.rest_id);
  console.log(rest);
  try {
    const result = await pool.query(
      "SELECT * FROM food WHERE rest_id = $1", 
      [ rest ]
    );

    console.log("Query Result:", result.rows); 

    if (result.rows.length === 0) {
      return res.status(200).json({ message: "No food found" });
    }
    
    res.status(200).json(result.rows);

  } catch (err) {
    console.error('Error fetching food items:', err.message);
    return res.status(500).send("Error fetching food items");
  }
}


async function foodDetails(req, res, next) {
  const [ name, description, amount, availability, image, rest_id] = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO food (name, description, amount, availability, image, rest_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *"
      [name, description, amount, availability, image, rest_id]
    );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }  
}

module.exports = {getFood , foodDetails}