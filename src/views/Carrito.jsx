import React, { useContext } from 'react'
import { Context } from '../contexts/Context';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Carrito = () => {

  const {data, setData, total, setTotal} = useContext(Context);
  //console.log(data);

  const handleClickMas = (id) => {
    const index = data.findIndex( (p) => p.id === id );
    const pedido = [...data] ;
    pedido[index].cantidad++;
    const precio = pedido[index].price;
    setData(pedido);
    setTotal(total + precio)
    
  }

  const handleClickMenos = (id) => {
    const index = data.findIndex( (p)=> p.id === id );
    const pedido = [...data] ;
    pedido[index].cantidad--;
    const precio = pedido[index].price;
    setData(pedido);
    setTotal(total - precio)
  }

  return (
          <div className="detalle" style={{background:'#E7E3E3', padding:'20px 40px'}}>
            <h4>Detalles del pedido:</h4>
              <div style={{background:'white', padding:'20px 20px'}}>
                    {
                      data.filter(p => p.cantidad > 0 ).map((p) => {
                            return <div key={p.id}>
                                          <div className='flex2' >
                                                <div className='flex2' style={{padding:'0px 15px 0px 15px'}}> 
                                                      <div className='paddingr'><img src={p.img} width="40" height="40" /></div>
                                                      <div>{p.name}</div>
                                                </div>
                                                <div className='flex2 paddingr' >
                                                    <div className='paddingr' > $ {p.price * p.cantidad}</div>
                                                    <div className='paddingr'><Button variant="primary" onClick={(e)=>handleClickMenos(p.id)}>-</Button></div>
                                                    <div className='paddingr'><span>{p.cantidad}</span></div>
                                                    <div><Button variant="danger" onClick={(e)=>handleClickMas(p.id)}>+</Button></div>
                                                </div>
                                          </div>
                                    <hr/>
                                  </div>
                              })
                    }
              <div style={{padding:'0px 15px 15px 15px'}}>
                  <div><h3>Total a pagar $ {total}</h3></div>
                  <div><Button variant="success"><NavLink to='/Encontruccion'>Ir a pagar</NavLink></Button></div>
             </div>
            </div>
           
          </div>
  )
}

export default Carrito