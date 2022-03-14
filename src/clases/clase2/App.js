import logo from './logo.svg';
import './App.css';

function App() {

  //let condition = true
  // let result = null

  // if (condition) {
  //   result = 'verdadero'
  // } else {
  //   result = 'falso'    
  // }

  // console.log('El resultado es '+ result + '. Poque si')

  // condicion ? :(else), condicion &&, condicion ||   
  //console.log(`El resultado es: ${ condition ? 'verdadero' : 'falso'}`)
  // const array = ['b', 'c', 'd']
  // spread operator
  // let a = 'a'

  // const newArray = [  ...array, a ]
  // console.log(newArray)

  // campos dinamico
  // let nombre = 'fede'

  // const obj = {
  //   dni: 12313131,
  //   ['id_'+nombre]: '123456'
  // }
  // console.log(obj)

  // destrcucturing
  const obj = {
    nombre: 'fede',
    apellido: 'Osandón',
    edad: 20
  }

  // let nombre = obj.nombre
  // let apellido = obj.apellido

  const { nombre: nom, apellido, edad=15 } = obj

  
  // asignacion en destructuracion
  console.log(edad);


  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
