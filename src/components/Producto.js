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

    //Eliminar Producto del carrito
    const eliminarProducto = (id) => {
        const productos = carrito.filter( producto => producto.id !== id );

        //Colocar productos en el state
        agregarProducto(productos);
    }
    
    return ( 
        <div>
            <h2>{ producto.nombre }</h2>
            <p> { producto.precio } </p>
            
            { productos ? 
                (
                    <button
                        type="button" 
                        onClick={ () => seleccionarProducto(producto.id)}
                    >Comprar</button>
                )
            :
                (
                    <button
                        type="button"
                        onClick={ () => eliminarProducto(producto.id) }
                    >Eliminar</button>
                )
            }
        </div>
        
    );
}
 
export default Producto;