import React from 'react';
import './Carrito.css';
import Producto from './Producto';

const Carrito = ({carrito}) => (
    <div className="carrito">
        <h2>Tu Carrito de compras</h2>
        { carrito.length === 0 ?
            <p>Carrito vacio...</p>
        :
            carrito.map(producto => (
                <Producto
                    key = { producto.id }
                    producto = { producto }
                />
            ))
        }
    </div>
);
 
export default Carrito;