import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../../public/utilities/localstore";
import Cart from "../cart/Cart";



const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=> {
        fetch('/bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data));
    }, [])

    useEffect(()=>{
        console.log(bottles.length)
       if(bottles.length>0){
        const storedCart = getStoredCart();
        console.log(storedCart, bottles)
        let savedCart = []
        for(const id of storedCart){
            console.log(id);
            const bottle = bottles.find(bottle => bottle.id === id);
            if(bottle){
                savedCart.push(bottle)
            }
        }
        setCart(savedCart)
        console.log('saved cart', savedCart)
       }
    },[bottles])


    const handleAddToCard = (bottle) => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLS(bottle.id)
    }


    return (
        <div>
            <h1>Data length: {bottles.length}</h1>
            <Cart cart={cart}></Cart>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle
                         key={bottle.id}
                         handleAddToCard={handleAddToCard} 
                         bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;