import React, { useContext } from 'react'
import style from "../cartwidget/cartwidget.module.css"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget=()=> {
  const { totalQuantity } = useContext(CartContext)
  return (
    <Link to='/cart'>

      <i class="fa fa-shopping-cart"> {totalQuantity}</i>
    </Link>
  )
}
export default CartWidget
