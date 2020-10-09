import React, { Component } from 'react';

let list = [
    {name:"jose", email: "blabla@gmail.com"},
    {name:"pedro", email: "blblablablablbalblab@gmail.com"}
];


class Sobre extends Component {


    constructor(props){
        super();
        this.state = {
            text: props.text,
            name: 'Bem Vindo!'
        };
        this.setName = this.setName.bind(this);
        this.resetName = this.resetName.bind(this);
    }

    setName(){
        this.setState({
            name: 'Welcome!'
        });
    }

    resetName(){
        this.setState({
            name: 'Bem Vindo!'
        });
    }

    render(){
        return(
            <div id="sobre" className="bg-dark, text-light">
              <h1>League Of Legends Wiki</h1>
              <p>{this.state.text}</p>
              <p>{this.state.name}</p>
              <button onClick={this.setName}>Mudar o Texto para ingles</button> <button onClick={this.resetName}>Resetar o Texto</button>
            </div>
        );
    }
}
export default Sobre;