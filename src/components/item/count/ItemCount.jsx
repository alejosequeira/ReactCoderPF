import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const add = () => {
    if (count < stock) setCount(count + 1);
  };

  const subtract = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <button onClick={subtract}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
      <button onClick={() => onAdd(count)} disabled={!stock}> Add Shopping Cart</button>
    </div>
  )
}
export default ItemCount;