import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/client'
import { getProductById } from '../../asyncMock'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(res => {
                setProduct(res)
            })
            .catch(error => {
                console.log("Error", error)
            })

    }, [itemId])

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)
                
            })

            .catch(error => {
                console.log("Error", error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}
export default ItemDetailContainer;
