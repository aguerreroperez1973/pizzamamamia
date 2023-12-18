import React from 'react'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Detalle from './Detalle'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Detalle></Detalle>
    </div>
  )
}

export default Home