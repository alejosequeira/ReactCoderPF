import React, { useState } from 'react';
import style from './checkoutform.module.css';

const CheckForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [confirmCorreo, setConfirmCorreo] = useState('');
    const [emailMatch, setEmailMatch] = useState(true);
    const [formNotEmpty, setFormNotEmpty] = useState(false);

    const handleCorreoChange = (event) => {
        const { value } = event.target;
        setCorreo(value);
        setEmailMatch(value === confirmCorreo);
        setFormNotEmpty(checkFormNotEmpty(value, apellido, telefono));
    };

    const handleConfirmCorreoChange = (event) => {
        const { value } = event.target;
        setConfirmCorreo(value);
        setEmailMatch(value === correo);
        setFormNotEmpty(checkFormNotEmpty(correo, apellido, telefono));
    };

    const checkFormNotEmpty = (email, lastName, phone) => {
        return email.trim() !== '' || lastName.trim() !== '' || phone.trim() !== '';
    };

    const handleConfirm = (event) => {
        event.preventDefault();
        const userData = {
            nombre,
            apellido,
            telefono,
            correo
        };
        onConfirm(userData);
    };

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
                <label htmlFor="email">
                    Email:
                    <input
                        id="email"
                        type="email"
                        value={correo}
                        onChange={handleCorreoChange}
                    />
                </label>
                <label htmlFor="confirmEmail">
                    Confirm the email:
                    <input
                        id="confirmEmail"
                        type="email"
                        value={confirmCorreo}
                        onChange={handleConfirmCorreoChange}
                        style={{ borderColor: emailMatch ? '' : 'red' }}
                    />
                </label>
                <div>
                    {emailMatch ? (
                        formNotEmpty ? (
                            <button type="submit">Confirm Purchase</button>
                        ) : (
                            <p style={{ color: 'red' }}>At least one field must be filled!</p>
                        )
                    ) : (
                        <p style={{ color: 'red' }}>Emails do not match!</p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CheckForm;


