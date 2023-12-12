import React, { useState } from 'react';
import style from '../ItemCount/itemcount.module.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const add = () => {
    if (count < stock) setCount(count + 1);
  };

  const subtract = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <>
      

      <div className={style.counter_wrapper}>
        <button onClick={subtract} className={style.counter_button}>-</button>
        <span className={style.counter_value}>{count}</span>
        <button onClick={add} className={style.counter_button}>+</button>
        <button onClick={() => onAdd(count)} disabled={!stock} className={stock ? style.add_button : style.add_button_disabled}>
          Add Shopping Cart
        </button>
      </div>
    </>
  )
}
export default ItemCount;