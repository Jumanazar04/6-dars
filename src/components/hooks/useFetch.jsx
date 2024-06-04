import { useEffect, useState } from "react";

const UseGetData = (path) => {

    const [cards, setCards] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch(`https://test-ecommerce-gamma.vercel.app/${path}`)
                const data = await response.json();
                setCards(data)
            } catch(err){
                console.log("Xatolik yuz berdi", err);
            }
        }
        fetchData()
    }, [path]);
    return cards
}

export default UseGetData;
