import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';

function App() {

  //Crear listado de Productos
  const[ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa', precio: 50 },
    { id: 2, nombre: 'Node', precio: 40 },
    { id: 3, nombre: 'Vue', precio: 30 },
    { id: 4, nombre: 'Angular', precio: 20 },
  ]);

  const[ carrito, agregarProducto ] = useState([]);

  //Obtener fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo = "Tienda Virtual"
      />
      <h1>Lista de Productos</h1>
      {productos.map(producto=>(
        <Producto
          key = { producto.id }
          producto = { producto }
          carrito = { carrito }
          productos = { productos }
          agregarProducto = { agregarProducto }
        />
      ))}
      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
