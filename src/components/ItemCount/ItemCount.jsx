import {useState } from "react";
import "./ItemCount.css"

export default function ItemCount({stock, initial, onAdd}){
    const[quantity, setQuantity] = useState(initial)

    const increment =() =>{
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    const decrement =() =>{
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }
    return(
        <div className="item-count">
            <div>
                <button onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <button className="add-to-cart" onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}