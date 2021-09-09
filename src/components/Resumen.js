import React from 'react';
import styled from '@emotion/styled';
import {primerMayuscula} from '../helper'
import PropTypes from 'prop-types'

const ContenedorResumen = styled.div`
    padding: 1em;
    text-align: center;
    background-color: #00838F;
    color: #ffffff;
    margin-top: 1rem;
    
`;

const Resumen = ({datos}) => {
    //extraer de datos
    const { marca, year, plan} = datos;
    if(marca ==='' && year ==='' && plan ===''){
        return null;
    }
    return ( 
        <ContenedorResumen>
            <h2>Resumen de cotización </h2> 
            <ul>
                <li>Marca: {primerMayuscula(marca)} </li>
                <li>Plan: {plan} </li>
                <li>Year: {year} </li>
            </ul>
           
        </ContenedorResumen>
     );
}
Resumen.prototypes= {
    datos: PropTypes.object.isRequired
}
export default Resumen;