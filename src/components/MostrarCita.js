import React from "react";

export const MostrarCita = ({ citas, setCitas }) => {

   

    const eliminar = (id) => {
        setCitas(citas.filter(c => c.id !== id))
    }

    return (
        <div className="mostrar-cita">
            <h2>citas</h2>

            {citas.length === 0 ? (
                <p>no hay citas</p>
            ) : (
                citas.map(({ nombre, dueño, fecha, hora, sintomas, id }) => (
                    <div className="cita" key={id}>
                        <p>
                            <span>mascota: </span>
                            {nombre}
                        </p>
                        <p>
                            <span>dueño: </span>
                            {dueño}
                        </p>
                        <p>
                            <span>fecha: </span>
                            {fecha}
                        </p>
                        <p>
                            <span>hora: </span>
                            {hora}
                        </p>
                        <p>
                            <span>sintomas: </span>
                            {sintomas}
                        </p>
                        <button onClick={ () => eliminar(id) }>eliminar</button>
                    </div>
                ))
            )}
        </div>
    );
};
