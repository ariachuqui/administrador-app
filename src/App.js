import React, { useState, useEffect } from 'react'
import { CrearCita } from './components/CrearCita'
import { MostrarCita } from './components/MostrarCita'

const App = () => {

    const initialState =  JSON.parse(localStorage.getItem('citas')) || [];

    const [citas, setCitas] = useState(initialState)

    useEffect(() => {
        localStorage.setItem('citas', JSON.stringify(citas))
     }, [citas])




    return (
        <>
            <h1>administrador de pacientes</h1>
            <div className="administracion">
                <CrearCita setCitas={setCitas} />
                <MostrarCita citas={citas} setCitas={setCitas}/>
            </div>
        </>
    )
}

export default App
