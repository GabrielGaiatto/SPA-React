import React, {Component} from 'react';
import './App.css';
import Topo from './components/topo';
import Jax from './img/jax.jpg';
import Sobre from './components/sobre'
import Serviços from './components/serviços'
import Footer from './components/footer'
import Contato from './components/contato'

class App extends Component {
  render(){
    return(
      <div className="App">
        <Topo name="Gustavo apenas"></Topo>
        <Sobre></Sobre>
        <Serviços></Serviços>
        <Contato></Contato>
        <Footer></Footer>

      </div>
    );
  }
}

export default App;