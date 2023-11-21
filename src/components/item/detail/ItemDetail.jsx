import React from 'react'
import ItemCount from '../count/ItemCount'
import style from '../detail/detail.module.css'

const ItemDetail= ({id,marca,modelo,color,resolucion,velocidad,title,price,pictureUrl,stock,description})=> {
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
            <ItemCount stock={stock} initial={1} onAdd={(count) => console.log("Quantity Add: ", count)}/>
        </footer>
        </section>
        <section className={style.img_article}>
        <picture>
            <img src={pictureUrl} alt="itemImg"/>
        </picture>
        </section>
        </div>
        <ItemCount stock={stock} initial={1} onAdd={(count) => console.log("Quantity Add: ", count)}/>
        <p>{description}</p>
    </article>

    </>
  )
}
export default ItemDetail;