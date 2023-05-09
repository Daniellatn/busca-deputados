import React from 'react'
import { Container } from 'react-bootstrap'
import NavbarPrincial from './NavbarPrincial'

const Pagina = (props) => {
  return (
    <>
      <NavbarPrincial/>
      <div className='bg-light text-dark py-3 text-center'>
        <Container>
          <h1> {props.titulo} </h1>
        </Container>
      </div>

      {props.children}
    </>
  )
}

export default Pagina