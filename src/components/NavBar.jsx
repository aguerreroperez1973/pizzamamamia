import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from '../contexts/Context';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  
  const {total} = useContext(Context);
 
    return (
      <div>
            <Navbar className="bg-body-tertiary" bg="primary">
              <Container className='nav-bar'>
                <div><Navbar.Brand ><NavLink to='/'><img  src="../src/imgs/trozo_pizza.png" alt="" width="30" height="30"/> <strong>  Pizzería Mamma Mia!</strong>  </NavLink></Navbar.Brand></div>
                <div><Navbar.Brand ><NavLink to='/carrito'> <img  src="../src/imgs/carrito-1.png" alt="" width="30" height="30" /> $ {total}</NavLink>  </Navbar.Brand></div>
              </Container>
            </Navbar>
    </div>
  )
}

export default NavBar