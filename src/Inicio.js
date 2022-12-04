import React, { useState, useEffect } from 'react';
import { listarProducto } from './prodcutosService';
import Swal from 'sweetalert2';

export const Inicio = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProdcutos();

    }, []);



    const getProdcutos = async () => {
        try {
            Swal.fire({ allowOutsideClick: false, text: 'Cargando...' });
            Swal.showLoading();
            const productosFireBase = await listarProducto();
            setProductos(productosFireBase);
            Swal.close();

        } catch (error) {
            Swal.close();
            console.log(error);
        }
    }




    return (
        <div className="container-fluid mt-3 mb-3">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    productos.map(producto => {
                        return (
                            <div className="col" key={producto.id}>
                                <div className="card">
                                    <img src={producto.imagen} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="">{producto.nombre}</h5>
                                        <p className="">{producto.direccion}</p>
                                        <p className="">{producto.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
