import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import Item from '../Item/Item'


const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>Carrito vacio</h1>
                <Link to='/products'>Productos</Link>
            </div>
        )
    }
    console.log(cart)
    return (
        <div>
            <h1>Carrito</h1>            
                {cart.map(p => <Item key={p.id}{...p}/>)}            
            <h2>Total: ${total}</h2>
            <button onClick={()=> clearCart()}>Vaciar carrito</button>
            <Link to='/checkout'>Finalizar compra</Link>
            <Link to={`/products`}>Productos</Link>
        </div>
    )
}
export default Cart
