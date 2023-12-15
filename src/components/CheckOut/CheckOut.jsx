import React, { useContext } from 'react'
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


  const createOrder = async ({ nombre, apellido, telefono, correo }) => {

    setLoading(true)
    try {
      const objOrder = {
        buyer: { nombre, apellido, telefono, correo },
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
          text: 'Out Of Stock!',
        })

      }
    }
    catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something its wrong!',
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
      <div className={style.formulario}>
        <h1>Your Order has been placed successfully.</h1>
        <button onClick={handleConfirmation}>VIEW ORDER</button>

      </div>
    )
  }




  return (
    <>
      <div className={style.formulario}>
        <h1>CHECKOUT</h1>
        <CheckForm onConfirm={createOrder} />
      </div>
    </>
  )
}
export default CheckOut;
