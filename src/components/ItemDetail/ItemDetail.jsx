import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import style from './itemdetail.module.css';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product, onAddToCart, quantityAdd, setQuantityAdd }) => {   

    return (
        <>
            {product ? (
                <article>
                    <div className={style.distri_article}>

                        <section className={style.info_article}>
                            <header>
                                <h2>{product.title}</h2>

                            </header>
                            <section className={style.caract_article}>
                                <ol>
                                    <li>Marca: {product.marca} </li>
                                    <li>Modelo: {product.modelo}</li>
                                    <li>Color: {product.color} </li>
                                    <li>Resolución: {product.resolucion} </li>
                                    <li>Velocidad máxima: {product.velocidad} </li>
                                </ol>

                                <h3>Availables: {product.stock}</h3>

                            </section>
                            <footer>
                                <p>${product.price}</p>
                                {
                                    quantityAdd > 0 ? (
                                        <Link to="/cart">Terminar mi compra</Link>
                                    ) : (
                                        <ItemCount
                                            stock={product.stock}
                                            initial={1}
                                            onAdd={(quantity) => setQuantityAdd(quantity)}
                                        />
                                    )
                                }

                            </footer>
                        </section>
                        <section className={style.img_article}>
                            <picture>
                                <img src={product.pictureUrl} alt="itemImg" />
                            </picture>
                        </section>
                    </div>
                    <div className={style.description_distri}>
                        <h3 className={style.description_title}>Item Description</h3>
                        <p className={style.description_text}>{product.description}</p>
                    </div>
                </article>
            ) : (
                <p>Product not found.</p>
            )}
        </>
    );
};

export default ItemDetail;
