import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Form from "../Form/Form";
import { collection, addDoc, Timestamp } from "firebase/firestore/lite";
import { db } from '../../firebase';

export default function CheckOut() {
    const [cargando, setCargando] = useState(false);
    const [orderDetails, setOrderDetails] = useState(null);

    const { cart, total, clearCart } = useContext(CartContext);

    const crearOrden = async ({ name, phone, email, orderCode }) => {
        setCargando(true);

        // Crear la orden con los datos recibidos y el código de orden generado
        const orden = {
            buyer: {
                name,
                phone,
                email
            },
            items: cart,
            total: total,
            date: new Date(),
            orderCode: orderCode // Código de orden generado
        };

        // Simulamos el proceso de creación de la orden (lo reemplazarás con el código de Firebase)
        setTimeout(() => {
            // Simulación de orden creada exitosamente
            setOrderDetails({ id: '123456', orderCode: orderCode });
            clearCart(); // Limpiar el carrito
            setCargando(false);
        }, 2000); // Simulamos un retraso de 2 segundos

    };

    if (cargando) {
        return <h1>Se está generando tu orden de compra...</h1>;
    }

    if (orderDetails) {
        return (
            <div>
                <h1>¡Gracias por tu compra!</h1>
                <p>Tu orden de compra es: {orderDetails.id}</p>
                <p>Y el código de tu orden es: {orderDetails.orderCode}</p>
            </div>
        );
    }

    return (
        <>
            <h1>Formulario de compra</h1>
            <Form confirmacion={crearOrden} />
        </>
    );
}