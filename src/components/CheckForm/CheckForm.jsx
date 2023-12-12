import React, { useState } from 'react'
import style from './checkoutform.module.css'

const CheckForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {
            nombre,
            apellido,
            telefono,
            correo
        }
        console.log(userData);
        onConfirm(userData)
    }
    return (
        <div>
            <form className={style.formu} onSubmit={handleConfirm}>
                <h2>Complete the form to confirm your purchase</h2>

                <label htmlFor="">
                    Name: 
                    <input
                        type="text"
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)} />
                </label>
                <label htmlFor="">
                    Last Name:
                    <input
                        type="text"
                        value={apellido}
                        onChange={(event) => setApellido(event.target.value)} />
                </label>
                <label htmlFor="">
                    Phone Number: 
                    <input
                        type="number"
                        value={telefono}
                        onChange={(event) => setTelefono(event.target.value)} />
                </label>                
                <label htmlFor="">
                    Email:
                    <input
                        type="email"
                        value={correo}
                        onChange={(event) => setCorreo(event.target.value)} />
                </label>
                <label htmlFor="">
                    Email:
                    <input
                        type="email"
                        value={correo}
                        onChange={(event) => setCorreo(event.target.value)} />
                </label>
                <div>
                    <button type="submit">Confirm Purchase</button>
                </div>
            </form>
        </div>
    )
}
export default CheckForm