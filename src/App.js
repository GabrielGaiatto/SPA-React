import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Topo from './components/topo';
import Sobre from './components/sobre'
import Jax from './components/jax'
import Footer from './components/footer'
import Contato from './components/contato'
import './style/footer.css';

class App extends Component {
  render(){
    return(
      <div className="App container">
        <Topo name="fulano"></Topo>
        <Sobre text="Projeto feito com react em pagina unica"></Sobre>
        <Contato></Contato>
        <Jax></Jax>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/q5Og00xBLzM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <Footer></Footer>
        
        

      </div>
    );
  }
}

export default App;