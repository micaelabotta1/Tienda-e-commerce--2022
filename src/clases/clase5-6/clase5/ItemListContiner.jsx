import { useState, useEffect } from 'react'

function ItemListContiner({ saludo }) {
    const [ count, setCount ]  = useState( 0 )// return [0,1]
    const [ bool, setBool ]  = useState( true )// return [0,1]


    useEffect(()=>{
        console.log('use Effect cada vez que se renderize el componente')
        //addEventListener('click', ()=>{})
        
        // return () => {
        //     console.log('efecto de limpieza, removeEventListener("click")')
        // }
    })
    
    useEffect(()=>{
        console.log('llamada a api, o tarea sincrónica pesada - 2 - Una sola vez después del primer montado ')
    }, [])
    
    useEffect(()=>{
        console.log('Solo se dispara si cambia bool')
    }, [bool, saludo])


    
    //let count = 0
    
    const handleCount = () => {
        // count = count +1, count += 1, count ++
        setCount( count + 1 )
        console.log(count)
    }
    const handleBool = () => {
        
        setBool( !bool )
        //console.log(count)
    }
    
    
    //console.log('montando el componte')
    
    return (
            <>
                <div>{saludo}</div> 
                <label>{count}</label> 
                <button onClick={handleCount} >click</button>
                <button onClick={handleBool} >Buleano</button>
            </>
    )
}

export default ItemListContiner