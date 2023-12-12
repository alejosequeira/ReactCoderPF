import React from 'react'
import styles from './aitemlist.module.css'
import ThisItem from './ThisItem'


const ItemList = ({ products }) => {
  return (
    <>
      <div className={styles.ListGroup}>
        {products && products.map(product => {
          return (
            <ThisItem key={product.id} {...product} />
          )
        })}
      </div>
    </>
  )
}
export default ItemList;
