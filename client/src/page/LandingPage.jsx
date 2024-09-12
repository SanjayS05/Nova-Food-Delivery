import React from "react";
import FoodSlider from "../components/FoodSlider";
import slide1 from "../assets/slide-1.png"
import del from "../assets/deli.png"
import deli from "../assets/del.png"
import guy from "../assets/guy.jpg"
import bg from "../assets/bg.jpeg"
import '../styles/LandingPage.css'

const LandingPage=()=>{
    return(
        <>
            <nav className="navbar">
                <div className="logo">NOVA</div>
                <div className="nav-links">
                    <div class="dropdown">
                        <button class="dropbtn">Career</button>
                        <div class="dropdown-content">
                            <a href={`/rs`}>Restaurant</a>
                            <a href={`/ds`}>Delivery Partner</a>
                        </div>
                    </div>
                    <a href={`/signin`} className="nav-link">Sign In</a>
                    <a href={`/signup`} className="nav-link">Sign Up</a>
                </div>
            </nav>
            <div className="container1">
                <img src={slide1} alt="Delicious food" className="food-image" />
                <div className="text-content">
                    <h1 className="slogan">Satisfy Your Hunger, Anytime, Anywhere!</h1>
                    <div className="search-bar">
                        <input type="text" placeholder="Coimbatore" className="search-input" />
                        <button className="search-button">end hunger</button>
                    </div>
                </div>
            </div>
            <FoodSlider></FoodSlider>
            <div className="section-container">
                <div className="section section-black">
                    <div className="text-contents">
                        <h1>Everything you crave, delivered.</h1>
                        <h3>Your favorite local restaurants</h3>
                        <p>Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.</p>
                    </div>
                    <img src={del} alt="Food" className="image-content" />
                </div>
                <div className="section section-red">
                    <img src={deli} alt="Eating outdoors" className="image-content" />
                    <div className="text-contents">
                        <h1>Order in Seconds.</h1>
                        <h3>Convenience at Your Fingertips</h3>
                        <p>Browse menus, customize orders, and check out with just a few taps. No more waiting in lines—your favorite meals are just a click away.</p>
                    </div>
                </div>
            </div>
            <div className="features-container">
                <div className="feature-item">
                    <img src={bg} alt="Something for everyone" className="feature-image" />
                    <h2>Something for everyone</h2>
                    <p>We've got every meal covered and more: snacks, alcohol, dessert, paper towels...</p>
                </div>
                <div className="feature-item">
                    <img src={guy} alt="Delivery or pickup" className="feature-image" />
                    <h2>Delivery or pickup</h2>
                    <p>Sit back and relax, have us deliver to you or skip the line with pickup.</p>
                </div>
            </div>
            <div className="About-us">
                <div className="tezt-content">
                    <h1>About Us</h1>
                    <div className="l"></div>
                    <p>Nova helps you find and order food from wherever you are. How it works: you type in an address, we tell you the restaurants that deliver to that locale as well as showing you droves of pickup restaurants near you. Want to be more specific? Search by cuisine, restaurant name or menu item. 24/7 customer care team that tracks each order and makes sure you get exactly what you want.</p>
                </div>
            </div>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Nova. All rights reserved.</p>
            </footer>
        </>
    )
}

export default LandingPage;