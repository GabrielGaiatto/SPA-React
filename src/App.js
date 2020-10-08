import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Topo from './components/topo';
import Jax from './img/jax.jpg';
import Sobre from './components/sobre'
import Serviços from './components/serviços'
import Footer from './components/footer'
import Contato from './components/contato'

class App extends Component {
  render(){
    return(
      <div className="App bg-dark">
        <Topo name="fulano"></Topo>
        <Sobre text="Projeto feito com react em pagina unica"></Sobre>
        <Serviços></Serviços>
        <Contato></Contato>
        <Footer></Footer>
        <img src={Jax}></img>
        
        

      </div>
    );
  }
}

export default App;