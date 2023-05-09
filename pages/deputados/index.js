import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina'
import React from 'react'
import apiDeputados from '@/services/apiDeputados';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

const index = ({ deputados }) => {

  return (
    <>
      <Pagina titulo="Deputados"></Pagina>
      <Container>
        <Row className='mt-3'>
          {deputados.map(item => (
            <Col md={2} title={item.nome} key={item.id}>
              <Link href={'/deputados/' + item.id}>
                <Card.Img className='border border-secondary-subtle rounded mb-3' variant="top" src={item.urlFoto} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>


    </>
  )
}

export default index

export async function getServerSideProps(context) {
  const resultado = await apiDeputados.get('/deputados')
  const deputados = resultado.data.dados

  return {
    props: { deputados },
  }
}