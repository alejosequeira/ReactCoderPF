import React, { useContext } from 'react';
import styles from './aitemlist.module.css';
import ThisItem from '../Item/ThisItem';
import { CartContext } from '../../context/CartContext';

const ItemList = ({ products }) => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (item, quantity) => {
    addItem(item, quantity);
  };

  return (
    <div className={styles.ListGroup}>
      {products && products.map(product => {
        return (
          <ThisItem
            key={product.id}
            {...product}
            onAddToCart={handleAddToCart} // Pasar la función de manejo de carrito como prop a ThisItem
          />
        );
      })}
    </div>
  );
};

export default ItemList;
