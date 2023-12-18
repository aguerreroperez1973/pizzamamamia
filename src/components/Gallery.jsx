import React, { useContext } from 'react';
import { Context } from '../contexts/Context';
import Card from './Card';

const Gallery = () => {

  const {data} = useContext(Context);

  return (
          <div className='galeria'>
            {
              data.map((p) => {
                                return <Card pizza={p} key={p.id} ></Card>
              })
            }
          </div>
  )
}

export default Gallery