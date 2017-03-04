
import React, { Component } from 'react';
import logo from './logo.svg';
import Resultado from './Resultado';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.buscar('Audifonos')
    this.state = {
      resultados: []
    }
  }

  cambioInput(elemento){
    console.log('Valor:', elemento.target.value);
    this.buscar(elemento.target.value);
  }

  buscar(busqueda){
    //peticion ajax
      fetch('https://api.mercadolibre.com/sites/MCO/search?q='+busqueda)
      .then((resultado) => resultado.json()).then((json) =>{
        this.setState({
          resultados: json.results
        })
      })
      //Tiene parametros, y haga lo siguiente
      //then(function(resultado){
        //console.log('then' );
        //console.log(resultado);
      //})
      //console.log('Despues del fetch');

      //Promesa es un metodo que se puede ejecutar despues de algo o tiempo
      //------->Funciones asincronas
  }

  render() {
    return (
      <div>
        <p>Clever Bladimir Velez Rivera</p>
        <input type="text" placeholder="Búsqueda" onChange={this.cambioInput.bind(this)}></input>
        {this.state.resultados.map(function (resultado){
          return <Resultado resultado={resultado}></Resultado>;
        })}
      </div>
    );
  }
}

export default App;
