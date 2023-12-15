import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/client'
import Swal from 'sweetalert2'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'products', itemId);

        getDoc(docRef)
            .then((response) => {
                if (response.exists()) {
                    const data = response.data();
                    const productAdapted = { id: response.id, ...data };
                    setProduct(productAdapted);
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Nonexistent Object',
                        text: 'FIND OTHER!',
                        confirmButtonText: 'Go to Products',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = '/products';
                        }
                    });

                    throw new Error('El documento no existe en la base de datos');
                }
            })
            .catch((error) => {
                console.log("Error", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);
    return (
        <div>

            <ItemDetail {...product} />
        </div>
    )
}
export default ItemDetailContainer;
