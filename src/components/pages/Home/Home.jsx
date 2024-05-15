import React, { useState, useEffect } from 'react';
import './home.css';
import dining from '../../../assets/dining.png';
import living from '../../../assets/living.png';
import bedroom from '../../../assets/bedroom.png';
import OurProducts from './OurProducts';

const images = {
    'dining.png': dining,
    'living.png': living,
    'bedroom.png': bedroom
};

function Home() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://test-ecommerce-gamma.vercel.app/categories');
                const data = await response.json();
                setCards(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <header>
                <div className='container'>
                    <div className="headerCard">
                        <span>New Arrival</span>
                        <h1 className='my-5'>Discover Our <br />New Collection</h1>
                        <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        <button className='my-10'>BUY NOW</button>
                    </div>
                </div>
            </header>
            <section>
                <div className="container browse">
                    <h2>Browse The Range</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="homeCards">
                        {cards.map((data) => (
                            <div className="homeCard" key={data.id}>
                                <img src={images[data.img]} alt="img" />
                                <h3>{data.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <OurProducts />
        </>
    );
}

export default Home;
