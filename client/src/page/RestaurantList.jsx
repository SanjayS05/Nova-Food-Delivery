// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import CardComponent from "../components/HotelCard";
// import "../styles/RestaurantList.css";
// import axios from "axios";

// const RestaurantList = () => {
//   const navigate = useNavigate();
//   const [hotels, setHotels] = useState([]);

//   function handleClick() {
//     navigate(`/hotel`);
//   }

//   // Function to fetch restaurant data
//   const fetchRestaurantData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/rest/getDetails');
//       setHotels(response.data);
//     } catch (error) {
//       console.error('Error fetching restaurant data:', error);
//     }
//   };

//   // Use useEffect to fetch data when the component mounts
//   useEffect(() => {
//     fetchRestaurantData();
//   }, []);

//   return (
//     <>
//       <nav className="navbar">
//         <div className="logo">NOVA</div>
//       </nav>
//       <div className="Restaurants">
//         <h1>Restaurants in Coimbatore</h1>
//         <div className="card-container">
//           {hotels.map((hotel, index) => (
//             <CardComponent
//               key={index}
//               imgUrl={hotel.image}
//               hotelName={hotel.hname}
//               rating={hotel.rating}
//               cuisine={hotel.cuisine}
//               location={hotel.address}
//               handleClick={handleClick}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default RestaurantList;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import CardComponent from "../components/HotelCard";
// import "../styles/RestaurantList.css";
// import axios from "axios";

// const RestaurantList = () => {
//   const navigate = useNavigate();
//   const [hotels, setHotels] = useState([]);

//   function handleClick() {
//     navigate(`/hotel`);
//   }

//   // Function to fetch restaurant data
//   const fetchRestaurantData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/rest/getDetails');
//       setHotels(response.data); // Set data directly from response
//     } catch (error) {
//       console.error('Error fetching restaurant data:', error);
//     }
//   };

//   // Use useEffect to fetch data when the component mounts
//   useEffect(() => {
//     fetchRestaurantData();
//   }, []);

//   return (
//     <>
//       <nav className="navbar">
//         <div className="logo">NOVA</div>
//       </nav>
//       <div className="Restaurants">
//         <h1>Restaurants in Coimbatore</h1>
//         <div className="card-container">
//           {hotels.map((hotel, index) => (
//             <CardComponent
//               key={index}
//               imgUrl={hotel.image}
//               hotelName={hotel.hname}
//               rating={hotel.rating}
//               cuisine={hotel.cuisine}
//               location={hotel.address}
//               handleClick={handleClick}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default RestaurantList;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardComponent from "../components/HotelCard";
import "../styles/RestaurantList.css";
import axios from "axios";
import FoodItem from "../components/FoodItem";

const RestaurantList = () => {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);

  // Function to fetch restaurant data
  const fetchRestaurantData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/rest/getDetails');
      setHotels(response.data);
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    }
  };

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  function handleClick(hotel) {
    navigate('/hotel', { state: { hotel } }); // Pass hotel details via state
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">NOVA</div>
      </nav>
      <div className="Restaurants">
        <h1>Restaurants in Coimbatore</h1>
        <div className="card-container">
          {hotels.map((hotel, index) => (
            <CardComponent
              id={index}
              key={index}
              imgUrl={hotel.image}
              hotelName={hotel.hname}
              rating={hotel.rating}
              cuisine={hotel.cuisine}
              location={hotel.address}
              handleClick={() => handleClick(hotel)} // Pass hotel details to handleClick
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantList;
