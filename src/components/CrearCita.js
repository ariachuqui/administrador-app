import React, { useState } from "react";

export const CrearCita = ({ setCitas }) => {
    const initialState = {
        nombre: "",
        dueño: "",
        fecha: "",
        hora: "",
        sintomas: "",
        id: "",
    };

    const [validacion, setValidacion] = useState(false);

    const [cita, setCita] = useState(initialState);

    const { nombre, dueño, fecha, hora, sintomas } = cita;

    const propiedades = [nombre, dueño, fecha, hora, sintomas];


    const handleInputChange = ({ target }) => {
        setCita({
            ...cita,
            [target.name]: target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        const val = propiedades.some(p => p.length <= 1);
        console.log(val)

        if (val === true) {
            setValidacion(true);
        } else {
            setValidacion(false);
            setCitas(c => [...c, { ...cita, id: new Date().getTime() }]);
            setCita(initialState);
        }
    };

    return (
        <div className="crear-cita">
            <h2>crear cita</h2>

            {validacion && (
                <div className='warning'> 
                 <p>todos los campos son obligatorios</p>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <p>nombre mascota</p>
                <input
                    type="text"
                    placeholder="Argos"
                    name="nombre"
                    value={nombre}
                    onChange={handleInputChange}
                />

                <p>nombre dueño</p>
                <input
                    type="text"
                    placeholder="Manuel"
                    name="dueño"
                    value={dueño}
                    onChange={handleInputChange}
                />

                <p>fecha</p>
                <input
                    type="date"
                    name="fecha"
                    value={fecha}
                    onChange={handleInputChange}
                />

                <p>hora</p>
                <input
                    type="time"
                    name="hora"
                    value={hora}
                    onChange={handleInputChange}
                />

                <p>síntomas</p>
                <input
                    type="text"
                    placeholder="diarrea, vomito..."
                    name="sintomas"
                    value={sintomas}
                    onChange={handleInputChange}
                />

                <button type="submit"> agregar cita </button>
            </form>
        </div>
    );
};
