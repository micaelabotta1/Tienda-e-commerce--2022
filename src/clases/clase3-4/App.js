
import './App.css';
import ComponenteClase from './componentes/ComponenteClase';
import Input from './componentes/Input/Input';
import Titulo from './componentes/Titulo/Titulo';


const ComponenteContenedor = () => {
    const lenguajes = ['jascript', 'java', 'python']
    
    const Item = lenguajes.map(ite => <li>{ite}</li>)

    return (
        <>
            {Item}
        </>
    )
}

function App() { // componenete contendor
  const style =  {backgroundColor: 'blue'}
  const placeholder= 'Ingrese el nombre' // nstestados

  function saludos() {
      console.log('saludando')
  }

    // Input({ placeholder: 'ingrese el nombre' })
    return (
        <div className="App" style={ style } onClick={ ()=>console.log('hola soy app') } >
            soy App
            <img 
                //src={} 
                alt='' 
            />
                <input />
            <Titulo  >
                <Input placeholder= { placeholder } saludar={ saludos } />
            </Titulo>
            
            <ComponenteClase />
            <ComponenteContenedor />
        </div>

    )
}

export default App;
