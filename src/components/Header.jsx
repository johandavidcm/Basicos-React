import React from 'react';

function Header(){
    const edad = 28;
    let mensaje;

    if(edad>=18){
        mensaje = 'eres mayor de edad';
    } else {
        mensaje = 'Eres menor de edad';
    }

    return(
        <h1 className="encabezado">Tienda Virtual</h1>
    );
}

export default Header;