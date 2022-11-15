
import './App.css';
import {Component} from 'react'

class App extends Component{
  constructor(props) {
      super(props);
      this.state = {
        productos: [],
        recuperado: false
      }
  }
  componentWillMount() {
    fetch('http://127.0.0.1:8000/productos')
      .then((response) => {
        return response.json()
      })
      .then((prod) => {
        this.setState({ productos: prod, recuperado: true})
      })    
  }
  mostrarTabla() {
    return (
      <div>
        <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>                    
          </tr>
        </thead>
        <tbody>  
          {this.state.productos.map(prod => {
            return (
              <tr key={ prod.codigo}>
                <td>{ prod.codigo}</td>
                <td>{ prod.nombre}</td>
                <td>{ prod.precio}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    );
  }
  render() {
    if (this.state.recuperado)
      return this.mostrarTabla()
    else
      return (<div>recuperando datos...</div>)
  }

}
export default App;
