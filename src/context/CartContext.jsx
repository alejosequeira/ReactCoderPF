import React, { createContext, useState } from 'react'

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            console.log(item)
            const newCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity }
                } else {
                    return prod
                }
            })
            console.log(newCart)
            setCart(newCart)
        } else {
            console.log(item)
            setCart([...cart, { ...item, quantity }])
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
    const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0)
    const total = cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0)
    
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart,totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}
