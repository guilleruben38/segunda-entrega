import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    
    <div className='card w-25 mt-2' style={{
    
    }} >
     
                  <Link to={`/detalle/${producto.id}`}>
                    <div className='card-header'>
                      {producto.name}
                    </div>
                    <div className='card-body'>
                      <img src={producto.imagen} alt='foto' className="w-50"/>

                      <div></div>
                      Categoria: {producto.categoria}<br/>
                      Precio: ${producto.precio}
                    </div>
                    <div className='card-footer'>
                
                    </div>
                  </Link>

                </div>
                
  )
}

export default Item