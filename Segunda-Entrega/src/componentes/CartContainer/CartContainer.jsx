import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {

    const { cartList, vaciarCarrito } = useCartContext()   

    return (
        <div>
            { cartList.map(producto => (
                <div key={producto.id}>
                    <img src={producto.imagen} style={{width: 100}} />
                    Nombre: {producto.name} - Cantidad: {producto.cantidad} - Precio: {producto.precio}
                </div>
                  
            ))}
            <button className="btn btn-outline-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    )
}

export default CartContainer