import React, { useContext } from 'react'
import style from "../cartwidget/cartwidget.module.css"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import logo2 from "../../image/icondrone.png"

const CartWidget=()=> {
  const { totalQuantity } = useContext(CartContext)
  return (
    <Link to='/cart'>
      <div className={style.cart_align}>
      <img className={style.logo_cart} src={logo2} alt="" />
      
      <i className="fa fa-shopping-cart"> 
      {totalQuantity}</i>
      
      </div>
    </Link>
  )
}
export default CartWidget
