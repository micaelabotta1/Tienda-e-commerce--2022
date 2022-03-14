import Titulo from "../Titulo/Titulo";

export default function Input(props) {    
    return (
        <div>
            {/* <Titulo tit='tittulo de input' sub='soy subtitiulo de input' /> */}
            <input type='text' placeholder={ props.placeholder } />
            <button onClick={ props.saludar }>Saludar</button>
        </div>
    )
   
}