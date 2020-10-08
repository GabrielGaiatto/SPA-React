import React, { Component } from 'react';

class Footer extends Component {
    constructor(props){
        super()
        this.state ={
            contato: '51 9880-9705',
            email:'fulano@gmail.com',
            ano: 2020,
            autor: 'fulano tananan'

        }
    }
    
    render(){
        return(          
                <footer className="footer, bg-dark, text-light">
                    <p>Contato {this.state.contato} - {this.state.email}</p>
                    <p>Copyright@{this.state.ano} - {this.state.autor}</p>
                </footer>       
        );
    }
}
export default Footer;