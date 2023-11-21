import React from 'react'
import { Link } from 'react-router-dom';
import style from './item.module.css'

const Item= ({id,title,pictureUrl,price,stock})=> {
  return (
    <>
    <article className={style.cardItem}>
        
        <header>
            <h2 className={style.item_header}>{title}
            </h2>
        </header>
        <picture className={style.cardItem__img}>
            <img src={pictureUrl} alt={title} className={style.itemImg}/>
        </picture>
        <section>
            <p className={style.info}>${price}</p>
            <p className={style.info}>Stock: {stock}</p>
            <button className={style.itemButton}>Add to cart</button>
        </section>
        <footer>
            <Link to={`/item/${id}`} className={style.itemOption} ><button className='ItemButton'>Ver Detalle</button></Link>
        </footer>
    </article>
    </>
  )
}
export default Item;