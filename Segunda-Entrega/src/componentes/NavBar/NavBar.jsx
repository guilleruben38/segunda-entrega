
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../Cartwidget/CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid ">
    <Link to='/' className='success' >Anden Sport</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item ">
          <NavLink to='/categoria/Botines'  className={({ isActive })=> isActive  ? 'btn btn-Success':'btn btn-outline-Success' } >Botines</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/categoria/Camisetas'  className={({ isActive })=> isActive  ? 'btn btn-Success':'btn btn-outline-Success' } >Camisetas</NavLink>
        </li>       
      </ul>
      <form className="d-flex" role="search">
        <CartWidget/>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar