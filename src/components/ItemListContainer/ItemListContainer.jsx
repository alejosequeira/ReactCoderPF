import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/client'

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()


  useEffect(() => {
    setLoading(true)

    const collectionRef = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products')

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProducts(productsAdapted)
      })
      .catch(error => {
        console.log("Error", error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

  return (
    <>
      <ItemList products={products} />
    </>
  )
}
export default ItemListContainer