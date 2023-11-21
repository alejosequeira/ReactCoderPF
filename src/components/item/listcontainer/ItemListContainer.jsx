import React, { useEffect, useState } from 'react'
import styles from "./itemlist.module.css"
import droneV from "../../../image/index-video.mp4"
import ItemCount from '../count/ItemCount'
import { getProductByCategory, getProductById, getProducts } from '../../../asyncMock'
import ItemList from '../list/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  const { categoryId } = useParams()


  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts
    asyncFunc(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.log("Error", error)
      })
  }, [categoryId])


  return (
    <>
      <ItemList products={products} />
    </>
  )
}
export default ItemListContainer;