import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import style from './detail.module.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, marca, modelo, color, resolucion, velocidad, title, price, pictureUrl, stock, description }) => {
    const [quantityAdd, setQuantityAdd] = useState(0)

    const {addItem} = useContext(CartContext)
    const handleOnAdd = (quantity) => {
        setQuantityAdd(quantity)
        const item={
            id,
            title,
            price
        }
        addItem(item, quantity)
    }
    return (
        <>
            <article>
                <div className={style.distri_article}>

                    <section className={style.info_article}>
                        <header>
                            <h2>{title}</h2>
                        </header>
                        <section className={style.caract_article}>
                            <ol>
                                <li>Marca: {marca} </li>
                                <li>Modelo: {modelo}</li>
                                <li>Color: {color} </li>
                                <li>Resolución: {resolucion} </li>
                                <li>Velocidad máxima: {velocidad} </li>
                            </ol>

                            <h3>Availables: {stock}</h3>

                        </section>
                        <footer>
                            <p>${price}</p>
                            {
                                quantityAdd > 0 ? (
                                    <Link to="/cart">Terminar mi compra</Link>
                                ) : (
                                    <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
                                )
                            }

                        </footer>
                    </section>
                    <section className={style.img_article}>
                        <picture>
                            <img src={pictureUrl} alt="itemImg" />
                        </picture>
                    </section>
                </div>
                <div className={style.description_distri}>
                    <h3 className={style.description_title}>Item Description</h3>
                    <p className={style.description_text}>{description}</p>
                </div>
            </article>

        </>
    )
}
export default ItemDetail;