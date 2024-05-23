import { useEffect, useState } from 'react';

const UseGetDataC = (path) => {


    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://test-ecommerce-gamma.vercel.app/${path}`);
                const data = await response.json();
                setCards(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [path]);
    return cards
}

export default UseGetDataC;
