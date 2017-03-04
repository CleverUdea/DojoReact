import React, {Component} from 'react';

export default class Resultado extends Component {
  resultado = { };

  constructor(props){
    super(props);
    this.resultado = props.resultado;
  }

  render(){
    return(
      <div classNames='item'>
        <div className='titulo'>{this.resultado.title}</div>
        <div className='imagen'><img role="presentation" src = {this.resultado.thumbnail}/></div>
        <div className='precio'>{this.resultado.price}</div>
        <div className='link'><a href={this.resultado.permalink}>Más informacion</a> </div>
      </div>
    );
  }
}
