

import React, { useEffect, useState, useContext } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/client';
import Swal from 'sweetalert2';
import { CartContext } from '../../context/CartContext';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [quantityAdd, setQuantityAdd] = useState(0);
    const [loading, setLoading] = useState(true);
    const { addItem } = useContext(CartContext);

    const { itemId } = useParams();

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

    const handleOnAddToCart = (quantity) => {
        const { id, title, price, pictureUrl, stock } = product;
        const item = {
            id,
            title,
            price,
            pictureUrl,
            quantity,
            stock,
        };
        addItem(item, quantity);
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ItemDetail
                product={product}
                onAddToCart={handleOnAddToCart}
                quantityAdd={quantityAdd}
                setQuantityAdd={setQuantityAdd}
            />
            )}
        </div>
    );
};

export default ItemDetailContainer;
