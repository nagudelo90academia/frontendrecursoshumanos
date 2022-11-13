import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Registro Usuarios / Gestion Recursos humanos</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre Usuario</label>
            <input value={name} name="name" id="name" placeholder="Nombre Usuario" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="tuemail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Clave</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Registrar</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Estas Registrado? Inicia Sesión Aquí.</button>
    </div>
    )
}