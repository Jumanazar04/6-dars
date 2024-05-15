import React, { useState } from 'react';
import './home.css'
import dining from '../../../assets/dining.png';
import living from '../../../assets/living.png';
import bedroom from '../../../assets/bedroom.png';

const images = {
    'dining.png': dining,
    'living.png': living,
    'bedroom.png': bedroom
}

function Home() {
    const [ ] = useState({
        cards: []
    })


    function fetched(){
        fetch('https://test-ecommerce-gamma.vercel.app/categories ')
            .then(response => {
                return response.json()
            }).then(data => {
                this.setState({ cards: data })
            })
    }
    fetched()
        return (
            <>
                <header >
                    <div className='container'>
                        <div className="headerCard">
                            <span>New Arrival</span>
                            <h1>Discover Our <br />New Collection</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            <button>BUY NOW</button>
                        </div>
                    </div>
                </header>
                <section>
                    <div className="container browse">
                        <h2>Browse The Range</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="homeCards">
                            {this.state.cards.map((data) =>( 
                                <div className="homeCard">
                                <img src={images[data.img]} alt="img" />
                                <h3>{data.name}</h3>
                            </div>
                            ))}
                            {/* <div className="homeCard">
                                <img src={living} alt="img" />
                                <h3>Living</h3>
                            </div>
                            <div className="homeCard">
                                <img src={bedroom} alt="img" />
                                <h3>Bedroom</h3>
                            </div> */}
                        </div>
                    </div>
                </section>
            </>
        );
    
}

export default Home;
