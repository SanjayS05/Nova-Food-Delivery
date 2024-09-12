const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const middleware = require("./middleware/middleware")
const app = express();


app.use(bodyParser.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}))

app.use(middleware);
app.use(express.json());

const auth = require("./routes/auth");
const rest = require("./routes/rest");
const food = require("./routes/food");

app.use('/auth', middleware, auth);
app.use('/rest', middleware, rest);
app.use('/food', middleware, food);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});


// app.get("/", async (req, res) => {
//   try {
//     const result = await pool.query("SELECT * FROM restaurant");
//     console.log(result);
//     if (result.rows.length > 0) {
//       return res.status(201).json({ message: result.rows });
//     }
//     res.status(404).json({ message: "No restaurants found" });
//   } catch (error) {
//     console.error("Error retrieving data:", error.message, error.stack);
//     res.status(500).send("An error occurred while retrieving data");
//   }
// });


// // In your server file or router
// app.get('/food/${res_id}', async (req, res) => {
//   const { res_id } = req.params; // Get restaurant ID from URL params
//   try {
//     const result = await pool.query(
//       "SELECT * FROM food WHERE rest_id = $1",
//       [res_id]
//     );
//     res.status(200).json(result.rows); // Return the food items
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Error fetching food items");
//   }
// });
