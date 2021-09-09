import React,{ useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import styled from '@emotion/styled';
var Spinner = require('react-spinkit');

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorSpinner = styled.div`
    margin-left: 15rem;
    margin-top: 1rem;
`;

const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {

  const [ resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca:'',
      year:'',
      plan:''
    }
  });
    //extraer datos
  const { cotizacion,datos }= resumen;
  const [ cargando, guardarCargando] = useState(false);
  return (
    
    <Contenedor>
      
      <Header
        titulo='Cotizador de seguros'
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen ={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? 
            <ContenedorSpinner>
              <Spinner name='circle' fadeIn='none' color="rgb(127,224,237)"/> 
            </ContenedorSpinner>
            :
            null }
        
        {cargando ? 
           null
          : 
          <Resumen
          datos = {datos} />}
        {cargando ? 
          null
          : 
          < Resultado
            cotizacion = {cotizacion}
          />  }
        
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
