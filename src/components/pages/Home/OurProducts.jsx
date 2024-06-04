import React from 'react';
import './OurProducts.css'
import { Link } from 'react-router-dom';
import UseGetData from '../../hooks/useFetch';

const OurProducts = () => {

    const cards = UseGetData("products")
    
    return (
        <div className='container'>
            <h2 className='text-3xl font-bold text-center my-8' >Our Products</h2>
            <div className="productCards gap-8 flex flex-wrap justify-between">
                {cards.map((data) => (
                    <Link to={`/products/${data.id}`} key={data.id} className="productCard bg-gray-200  w-72 min-h-96 pb-2">
                        <img src={data.img} className='w-72' alt="img" />
                        <div className="text px-2 ">
                            <p className='text-2xl my-1 font-bold'>{data.title}</p>
                            <p className='text-gray-400'>{data.subtitle}</p>
                            <p className=' text-xl mr-2' >Rp {data.newPrice}  <span className='text-gray-400 text-lg'>Rp {data.oldPrice}</span></p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default OurProducts;
