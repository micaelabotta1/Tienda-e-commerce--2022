import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../componentes/ItemCount/ItemCount";
import ItemList from "../componentes/ItemList/ItemList";
import { getFetch } from "../helpers/gFetch";


function ItemListContiner({ saludo }) {
    const [bool, setBool] = useState(true)
    const [ loading, setLoading ] = useState(true)
    const [prods, setProds ] = useState([])
    //console.log(task)
    const { id } = useParams()
    

    useEffect(()=> {
        if (id) {
            getFetch// simulacion a un llamado a una api        
            .then(resp => setProds(resp.filter(prod=> prod.categoria === id)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))           
        } else {
            getFetch// simulacion a un llamado a una api        
            .then(resp => setProds(resp))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))            
        }
    }, [id])

    const onAdd = (cant) => {
        console.log(cant)
    }


    console.log(id)
    return (
            <>
                <div>{saludo}</div> 
                {       loading ? <h2>Cargando...</h2> 
                    :
                        <ItemList prods={prods} />
                }
                <ItemCount initial={1} stock={10} onAdd= { onAdd  } />
            </>
    )
}

export default ItemListContiner