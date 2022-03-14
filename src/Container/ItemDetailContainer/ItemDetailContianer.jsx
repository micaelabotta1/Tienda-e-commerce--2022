import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../componentes/ItemDetail/ItemDetail"
import { getFetch } from "../../helpers/gFetch"


function ItemDetailContianer() {
    const [producto, setProducto] = useState({})

    const { detalleId } = useParams()
    console.log(detalleId)
    
    return (
        <div>
            'ItemDetailContainer'
        </div>
    )
}

export default ItemDetailContianer