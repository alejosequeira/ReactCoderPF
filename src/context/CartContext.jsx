import React, { createContext, useState } from 'react'

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {            
            setCart(prev => [...prev, {...item, quantity}])
        }
        else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const newCart = cart.filter((i) => i.id !== itemId)
        setCart(newCart)
    }
    const clearCart = () => {
        setCart([])
    }
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id===itemId)
    }
    
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
