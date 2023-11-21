import React from 'react'
import styles from "../list/aitemlist.module.css"
import Item from '../Item'

const ItemList= ({products}) => {    
  return (
    <>
    <div className={styles.ListGroup}>
        {products && products.map(product=>{
            return(
                <Item key={product.id} {...product}/>
            )
        })}
        </div>
    </>
  )
}
export default ItemList;
 