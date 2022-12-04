import React, { useState } from 'react';

const Buscar = () => {
    const [ valoresFormulario, setValoresFormulario ] = useState({});
    const { nombre = '' } = valoresFormulario;

    const cursos = [
        { nombre: 'Ing Web I', creditos: 3 },
        { nombre: 'Metricas', creditos: 2 },
        { nombre: 'Ing Software', creditos: 3 }
    ];
  
    // permite asignar los valores del formulario a la variable de estado  formValues
    const handleOnChange = (e) => {
      setValoresFormulario({ ...valoresFormulario, [e.target.name]: e.target.value });
    }
  
    // pinta los valores del formulario cuando presionan el boton
    const handleOnSubmit = (e) => {
      e.preventDefault(); // evita que se recargue el formulario
      console.log(valoresFormulario);
      const nuevosCursos = cursos
                .filter(curso => curso.nombre.toUpperCase().includes(nombre.toUpperCase()));
      console.log(nuevosCursos);
    }

    console.log('Estoy en buscar');

    

    /*const nuevosCursos = [];
    for (const curso of cursos) {
        if (curso.creditos >= 3) {
            nuevosCursos.push(curso);
        }
    }*/
    //const nuevosCursos = cursos.filter(curso => curso.creditos >= 3);
    //const nuevosCursos = cursos.filter(curso => curso.nombre.toUpperCase().includes('ING'));

    //console.log(cursos, nuevosCursos);

    return (
        <div className="container-fluid mt-3">
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className="mb-3">
                    <label className="form-label">Nombre producto</label>
                    <input required type="text" name="nombre" value={nombre}
                        className="form-control" onChange={(e) => { handleOnChange(e) }} />
                </div>
                <button type="submit" className="btn btn-primary">Buscar</button>
            </form>
        </div>
    )
}

export {
    Buscar
}