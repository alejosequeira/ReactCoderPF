import React from 'react'
import styles from './aitemlist.module.css'
import Item from '../Item/ItemItem';


const ItemList = ({ products }) => {
  return (
    <>
      <div className={styles.ListGroup}>
        {products && products.map(product => {
          return (
            <Item key={product.id} {...product} />
          )
        })}
      </div>
    </>
  )
}
export default ItemList;
