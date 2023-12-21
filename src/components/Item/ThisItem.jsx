import React from 'react';
import { Link } from 'react-router-dom';
import style from './item.module.css';
import ItemCount from '../ItemCount/ItemCount';

const ThisItem = ({ id, title, pictureUrl, price, stock, onAddToCart }) => {
    const handleOnAdd = (quantity) => {
        const item = {
            id,
            title,
            price,
            pictureUrl,
            quantity,
            stock,
        };
        onAddToCart(item, quantity); // Llama a la función onAddToCart del componente padre
    };

    return (
        <article className={style.cardItem}>
            <header>
                <h2 className={style.item_header}>{title}</h2>
                <Link to={`/item/${id}`} className={style.itemOption}>
                    <button className={style.ver_detalle}>
                        <i className="fa fa-eye"> </i> Details
                    </button>
                </Link>
            </header>
            <picture className={style.cardItem__img}>
                <img src={pictureUrl} alt={title} className={style.itemImg} />
            </picture>
            <section className={style.info}>
                <p className={style.info_price}>${price}</p>
                <p className={style.info_stock}>Stock: {stock}</p>
            </section>
            <footer>
                <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
            </footer>
        </article>
    );
};

export default ThisItem;
