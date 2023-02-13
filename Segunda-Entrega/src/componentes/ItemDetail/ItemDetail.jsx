import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"


const Componente = ()=> {
    return (
        <div style={{
            height: '60vh',
            width: '50vw',
            backgroundImage: "url(/imagessss.png)",
            color:'black',
            fontSize:'35px',
    
            display: 'absolute',
            float: 'right'
        }}>
          
            <Link to="/cart" >Completar la compra</Link>
        </div>
    )
}



const ItemDetail = ({ producto }) => {

    const [isCount, setIsCount] = useState(true)
    const [cart, setCart] = useState(false)

    const { agregarCarrito } = useCartContext()

    const onAdd = (cant)=>{
        console.log(cant)

        agregarCarrito( { ...producto, cantidad: cant } )
        setIsCount(false)
    }  

   
    const handleCart = () => {
        setCart(!cart)
    }
    return (
        <div style={{
            backgroundImage: "url(/images.png)"
        }}>
            <div className="row"> 
                <div className="col-6"> 
                    <img src = {producto.imagen} className='w-75'/>
                    <h3>{producto.name}</h3> 
                    
                    <h4>   $ {producto.precio}</h4>
                        
                </div>
                <div className="col-6">
                    <button className="btn btn-outline-dark" onClick={handleCart}>Carrito</button>
                    {
                        isCount ? 
                            <ItemCount initial={1} stock={30} onAdd={onAdd} />                        
                        :
                            <>
                                <Link className="btn btn-outline-success" to='/cart'>
                                    Ir a Cart
                                </Link>
                                <Link className="btn btn-outline-success" to='/'>
                                    Ir a Home
                                </Link>

                            </>
                    }   
                    {
                        cart && <Componente />
                    }
                </div>
            </div>
        
        </div>
    )
}

export default ItemDetail