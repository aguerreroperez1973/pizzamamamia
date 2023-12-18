import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Context } from '../contexts/Context';
import { useContext } from 'react';

const PizzaCard = ( {pizza} ) => {

  const { data, setData, setTotal } = useContext(Context);
  const navigate = useNavigate();

  const handleClick = () => {
    
    const index = data.findIndex( (p) => p.id === pizza.id );
    const pedido = [...data] ;
    pedido[index].cantidad++;
   
    setData(pedido);
    setTotal(prev => prev + pizza.price)
  }

  const handleDetalle = () => {
    navigate(`/detalle/${pizza.id}`)
  }

  return (
          <>
              <Card style={{ width: '18rem', height:'100%'}}>
                <Card.Img variant="top" src={pizza.img} />
                  <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title><hr />
                      <Card.Text> <strong>Ingredientes:</strong>  </Card.Text>
                      <Card.Text style={{margin:'1rem'}}> {pizza.ingredients.map((n,i) => { return <li key={i}> 
                      <img src="../src/imgs/trozo_pizza.png" alt="" width="20" height="20"/>  {n}</li> })} </Card.Text><hr />
                      <Card.Text> <strong>$ {pizza.price}</strong> </Card.Text>
                      <div className='flex1'>
                        <div><Button variant="primary" onClick={handleDetalle}> Ver más <img src="../src/imgs/ojitos.png" alt="" width="30" height="30"  /></Button></div>
                        <div><Button variant="danger" onClick={handleClick}> Añadir <img src="../src/imgs/carrito-1.png" alt="" width="30" height="30"  /></Button></div>
                      </div>
                </Card.Body>
              </Card>
          </>
  )
}

export default PizzaCard