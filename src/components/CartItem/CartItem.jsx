import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import style from './cartitem.module.css'
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';


const CartItem = ({ id, title, pictureUrl, price, stock, quantity }) => {
  const [quantityAdd, setQuantityAdd] = useState(0)

  const { addItem } = useContext(CartContext)
  const handleOnAdd = (quantity) => {
    setQuantityAdd(quantity)
    const item = {
      id,
      title,
      price,
      pictureUrl,
      quantity,
      stock,
    }
    addItem(item, quantity)
  }
  return (
    <>
      <div className={style.cart}>
        <article className={style.cardItems}>

          <section className={style.foto}>
            <img src={pictureUrl} alt={title} className={style.itemImg} />
          </section>

          <section>

            <h2 className={style.item_header}>{title}</h2>
            <p className={style.info}>Stock: {stock}</p>
            <p className={style.info}>Quantity Add: {quantity}</p>
          </section>

          <section className={style.price}>
            <p className={style.info_price}>${price}</p>
            <Link to={`/item/${id}`} className={style.itemOption} >
              
              <button className={style.ver_detalle}><i className="fa fa-eye"> </i> Details</button></Link>
            {
              <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
            }
          </section>
        </article >

        <article className={style.cardResume}>

        </article>

      </div>
    </>
  )
}
export default CartItem
