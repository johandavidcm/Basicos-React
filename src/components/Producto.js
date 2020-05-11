import React from 'react';

const Producto = ({ producto, carrito, agregarProducto, productos }) => {
    
    //Agregar producto al carrito
    const seleccionarProducto = (id) => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            ...carrito,
            producto
        ]);
    }
    
    return ( 
        <div>
            <h2>{ producto.nombre }</h2>
            <p> { producto.precio } </p>
            <button
                type="button" 
                onClick={ () => seleccionarProducto(producto.id)}
            >Comprar</button>
        </div>
    );
}
 
export default Producto;