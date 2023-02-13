import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch, gFetchOne } from "../../utils/gFetch"

import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [ producto, setProducto ] =  useState({})
    const { idProducto } = useParams()


    useEffect(()=>{        
        gFetchOne(idProducto)
        .then(response => setProducto(response))
        .catch(error => setProducto(error))
    }, [])


    return (
        <div 
    
        >        
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer