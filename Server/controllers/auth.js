const pool = require('../configs/db.config');
// const dotenv = require('dotenv');
// dotenv.config();
const express = require('express');

async function register (req, res, next) {
  const { name, phno, addr, pincode } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (name, phone, address, pincode) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, phno, addr, pincode]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function login (req, res) {
  const { user, phone } = req.query; // Use req.query to get query parameters
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE name = $1 AND phone = $2",
      [user, phone]
    );
    console.log(result)
    if (result.rows.length > 0) {
      return res.status(200).json({ message: "Success" });
    }
    return res.status(404).json({ message: "Error" });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ message: "User not present" });
  }
}

module.exports = {register,login}