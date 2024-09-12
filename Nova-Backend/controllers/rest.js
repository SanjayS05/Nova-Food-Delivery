const pool = require('../configs/db.config');
const express = require('express');
// const dotenv = require('dotenv');
// dotenv.config();

async function sendDetails(req, res, next){
    const { name, address, pincode, cuisine, rating } = req.body;
    try {
      const result = await pool.query(
        "INSERT INTO restaurant( hname, address, pincode, cuisine, image, rating) values ($1 ,$2 ,$3 ,$4 ,$5, $6)RETURNING *",
        [name, address, pincode, cuisine, image, rating]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

async function getDetails(req, res){
  try {
    const result = await pool.query("SELECT * FROM restaurant");
    if (result.rows.length > 0) {
      return res.status(200).json(result.rows); // Return the array directly
    }
    res.status(404).json({ message: "No restaurants found" });
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    res.status(500).json({ message: "Error fetching restaurant data" });
  }
}



module.exports = {sendDetails , getDetails};