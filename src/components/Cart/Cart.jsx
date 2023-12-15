import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../cartItem/CartItem'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import style from './cart.module.css'


const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)
    if (totalQuantity === 0) {
        return (
            <div>
                <h1 className={style.title}>Add Products</h1>
                <Link to='/products' className={style.subtitle}><h1>Products availables</h1></Link>
                <ItemListContainer />
            </div>
        )
    }
    return (
        <div>
            <h1 className={style.title}>My Cart</h1>
            <h2 className={style.summary}>Cantidad de productos: {totalQuantity}</h2>
            <h2 className={style.summary}>Total: ${total}</h2>
            {cart.map(p => <CartItem key={p.id}{...p} />)}

            <div className={style.module}>
                <button className={style.empty_cart} onClick={() => clearCart()}>Empty Cart</button>
                <Link className={style.ver_detalle} to={`/products`}>More Products</Link>
                <Link className={style.ver_detalle} to='/checkout'>Finish Buying</Link>
            </div>

            <ItemListContainer />
        </div>
    )
}
export default Cart
