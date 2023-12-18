import React, { useContext} from 'react'
import { Context } from '../contexts/Context';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Detalle = ( ) => {
  const {data, setData, total, setTotal } = useContext(Context);
  const { id } = useParams();
  
    const handleClick = () => {
    const index = data.findIndex( (p) => p.id === id );
    const pedido = [...data] ;
    pedido[index].cantidad++;
    const precio = pedido[index].price;
    setData(pedido);
    setTotal(total + precio)
  }
 
  return (
          <div>
                    {
                      data.filter( (p) => p.id === id).map((p) => {
                        return <div key={p.id} style={{ display:'flex', margin:'2rem 10rem', fontSize:'12px', borderStyle:'solid', borderColor:'#E7E3E3'}}>
                                  <div><img src={p.img} alt="" width="100%" height="100%"/></div>
                                  <div style={{margin:'1rem'}} >
                                      <div> <h5> {p.name} </h5> </div><hr />
                                      <div> {p.desc} </div>
                                      <div><h6>Ingredientes:</h6> 
                                      <div style={{margin:'1rem'}}>{p.ingredients.map((n,i) => <li key={i}> 
                                            <img src="../src/imgs/trozo_pizza.png" alt="" width="20" height="20"/>  {n}</li>)}</div> 
                                      </div>
                                      <div className='flex2'>
                                                  <div><h4>Precio: $ {p.price}</h4></div>
                                                  <div><Button variant="danger" onClick={handleClick} > Añadir 
                                                  <img src="../src/imgs/carrito-1.png" alt="" width="30" height="30" /></Button></div>
                                      </div>
                                  </div>
                                </div>
                         })
                    } 
          </div>
  )
}

export default Detalle