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
            name: 'fulanito'
        };
        this.setName = this.setName.bind(this);
        this.resetName = this.resetName.bind(this);
    }

    setName(){
        this.setState({
            name: 'ciclanildo'
        });
    }

    resetName(){
        this.setState({
            name: 'Fulanito'
        });
    }

    render(){
        return(
            <div id="sobre" className="bg-dark, text-light">
              <h1>Sobre</h1>
              <p>{this.state.text}</p>
              <p>Eu sou o {this.state.name}</p>
              <button onClick={this.setName}>Mudar Nome</button>
            </div>
        );
    }
}
export default Sobre;