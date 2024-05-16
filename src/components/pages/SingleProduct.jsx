import React,  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './singleproduct.css'


const SingleProduct = () => {
    const params = useParams();
    const [card, setCard] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://test-ecommerce-gamma.vercel.app/products');
                const data = await response.json();
                
                const foundCard = data.find((el) => +el.id === +params.id);
                
                if (foundCard) {
                    setCard(foundCard);
                } else {
                    console.log(`Product with id ${params.id} not found.`);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [params.id]); 

    if (!card) {
        return <div className='.container text-center my-4 font-bold text-3xl'>Loading...</div>;
    }

    
    return (
        <div className='container w-full'>
            
                    <div key={card.id} className="productCard singleCard">
                        <img src={card.img} className='w-72' alt="img" />
                        <div className="text px-2 ">
                            <p className='text-3xl my-1 font-bold '>{card.title}</p>
                            <p className='text-gray-400'>{card.subtitle}</p>
                            <p className=' text-xl mr-2' >Rp {card.newPrice}  <span className='text-gray-400 text-lg'>Rp {card.oldPrice}</span></p>
                            <div className="buttons">
                                <button className='singleBtn'>- 1 +</button>
                                <button className='singleBtn'>Add to Cart</button>
                                <button className='singleBtn'>+ Compare</button>
                            </div>
                        </div>
                    </div>
        </div>
    );
}

export default SingleProduct;
