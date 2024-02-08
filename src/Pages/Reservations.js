import React from 'react';
import background from "../components/Image/background.webp";
import BookingForm from '../components/BookingForm';

const Reservations = () => {
    return (
        <>
        <section>
            <article className="Background" style={{ backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw'}}>
                <h1 style={{color:'white'}}>30% Off During Christmas!</h1>
                <p style={{color:'white'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed sed risus pretium quam vulputate.
                </p>
            </article>
        </section>
        <section className='ReserveSection'>
        <h1>Book a Table</h1>
            <BookingForm />
        </section>

        </>
    )
}

export default Reservations;