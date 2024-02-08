import React from "react";
import background from "../components/Image/background.webp";

const Home = ()  => {
    return (
    <div>
       <section>
            <article className="Background" style={{ backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw'}}>
                <h1 style={{color:'white'}}>30% Off During Diwali!</h1>
                <p style={{color:'white'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed sed risus pretium quam vulputate.
                </p>
            </article>
        </section>
        <section>
            <article>
                <h2>Our New Menu</h2>
                <img src={require('../components/Image/menu.jpg')} alt="New Menu" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Ultricies integer quis auctor elit sed vulputate.
                </p>
                <button><a href="/menu">Menu</a></button>
            </article>
            <article>
                <h2>Reserve a Table</h2>
                <img src={require('../components/Image/pani-puri.webp')} alt="Book table" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Ultricies integer quis auctor elit sed vulputate.
                </p>
                <button><a href="/reservations">Reserve a Table</a></button>
            </article>
            <article>
                <h2>Opening Hour</h2>
                <img src={require('../components/Image/vada pav.jpeg')} alt="Opening hour" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <div>Mon - Fi: 2pm - 10pm</div>
                    <div>Sat: 2pm - 11pm </div>
                    <div>Sun: 2pm - 9pm</div>
                </p>
            </article>
        </section>

    </div>
    )
}

export default Home;