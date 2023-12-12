import React, { useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import CheckForm from '../CheckForm/CheckForm'
import { useState } from 'react'
import { collection, addDoc, Timestamp, writeBatch, query, where, getDocs, documentId } from 'firebase/firestore'
import { db } from '../../firebase/client'
import Swal from 'sweetalert2'
import style from './checkout.module.css'


const CheckOut = () => {
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState('')
  const { cart, total, clearCart } = useContext(CartContext)
  

  const createOrder = async ({ nombre, telefono, correo }) => {

    setLoading(true)
    try {
      const objOrder = {
        buyer: { nombre, telefono, correo },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date())
      }
      const batch = writeBatch(db)
      const outOfStock = []
      const ids = cart.map(prod => prod.id)
      const productsRef = collection(db, 'products')
      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
      const { docs } = productsAddedFromFirestore

      docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find(el => el.id === doc.id)
        const quantityAddedToCart = productAddedToCart?.quantity

        if (stockDb >= quantityAddedToCart) {
          batch.update(doc.ref, { stock: stockDb - quantityAddedToCart })
        } else {
          outOfStock.push({ ...dataDoc, id: doc.id })
        }
      })
      if (outOfStock.length === 0) {
        await batch.commit()
        const orderRef = collection(db, 'orders')
        const orderAdded = await addDoc(orderRef, objOrder)
        setOrderId(orderAdded.id)
        clearCart()
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algunos productos se quedaron sin stock!',
        })

      }
    }
    catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal!',      
      })
    }
    finally {
      setLoading(false)
    }
  }
  if (loading) {
    return <div>The Order is Loading...</div>
  }
  const handleConfirmation = () => {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: `${orderId}`,
      text: `Copy Your Order!`,
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/';
      }
    });
  };
  if (orderId) {
    return (
      <div>
        <h1>Order Created Successfully. Your Order Number is {orderId}</h1>
        <button onClick={handleConfirmation}>Confirm Order</button>

      </div>
    )
  }
    



  return (
    <div className={style.formulario}>
      <h1>CheckOut</h1>
      <CheckForm onConfirm={createOrder} />

    </div>
  )
}
export default CheckOut;









// const orders = collection(db, 'orders')
// await addDoc(orders, objOrder).then((docRef)=> {
//   setOrderId(docRef.id)
// }
// )
// const batch = writeBatch(db)
// const items = collection(db, 'items')
// cart.forEach((item)=> {
//   batch.update(items, item.id, {stock: item.stock - item.quantity})
// })
// await batch.commit()
// const q = query(collection(db, 'items'), where(documentId(), 'in', cart.map((item)=> item.id)))
// const querySnapshot = await getDocs(q)
// const itemsToUpdate = querySnapshot.docs.map((doc)=> doc.data())
// console.log(itemsToUpdate)
// itemsToUpdate.forEach((item)=> {
//   batch.update(items, item.id, {stock: item.stock - item.quantity})
// })
// await batch.commit()
// clearCart()
// }
// catch (error) {
// console.log(error)
// }
// finally {
// setLoading(false)
// }
// }
// if (loading) {
// return <h1>Loading...</h1>
// }
// if (orderId) {
// return <h1>Orden creada con exito. Su numero de orden es {orderId}</h1>
// }
// else{
// return <CheckOutForm onConfirm={createOrder}/>
// }