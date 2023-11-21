import React, { useEffect, useState } from 'react'
import { getProductById } from '../../../asyncMock'
import ItemDetail from '../detail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
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
    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}
export default ItemDetailContainer;
