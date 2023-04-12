import { useState } from 'react'
import './CampoTexto.css'

//props

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    // let valor = 'Marcos'


    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    );
}

//exportar a const e não uma função

export default CampoTexto

