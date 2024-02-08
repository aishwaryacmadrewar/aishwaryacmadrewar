import React from 'react';

function Footer () {
    return (
        <div className='Footer'>
        <section>
            <img src="logo2.png" alt="logo2" className='logo2'/>
        </section>
        <section>
            <h3>Doormat Navigation</h3>
            <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
            </ul>
        </nav>
        </section>
        <section>
            <h3>Contact</h3>
            <p>Address</p>
            <p>Phone Number</p>
            <p>email</p>
        </section>
        <section>
            <h3>Social Media Links</h3>
            <p>Twitter</p>
            <p>Youtube</p>
            <p>Instagram</p>
        </section>
        </div>
    )
}

export default Footer;