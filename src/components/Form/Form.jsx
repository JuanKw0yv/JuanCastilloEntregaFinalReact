import { useState } from "react";
import "./Form.css";

// Función para generar un código aleatorio
const generateOrderCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];
    }
    return code;
};

export default function Form({ confirmacion }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleClick = (e) => {
        e.preventDefault();

        // Generar el código de la orden
        const orderCode = generateOrderCode();

        const data = {
            name,
            phone,
            email,
            orderCode, // Agregar el código generado
        };

        // Llamar a la función `confirmacion` para enviar los datos y el código
        confirmacion(data);
    };

    return (
        <div className="main__container--checkout--form">
            <h1>Finalizar compra</h1>
            <form onSubmit={handleClick}>
                <input
                    type="text"
                    placeholder="Nombre completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="phone"
                    placeholder="Telefono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button type="submit">Crear orden</button>
            </form>
        </div>
    );
}
