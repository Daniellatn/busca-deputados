import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina'
import React from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import apiDeputados from '@/services/apiDeputados';
import Link from 'next/link';

const index = ({ partidos }) => {
  return (
    <>
      <Pagina titulo="Partidos"></Pagina>
      <Container>
        <Row className='mt-5'>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Sigla</th>
                <th>Nome partido</th>
              </tr>
            </thead>
            <tbody>
              {partidos.map(item => (
                <tr key={item.id}>
                  <td> {item.sigla} </td>
                  <td>
                    <Link href={'/partidos/' + item.id}>
                      {item.nome}
                    </Link>
                  </td>
                </tr>
              ))}

            </tbody>
          </Table>

        </Row>
      </Container>
    </>
  )
}

export default index

export async function getServerSideProps(context) {

  const resultado = await apiDeputados.get('/partidos?itens=100')
  const partidos = resultado.data.dados

  return {
    props: { partidos, }
  }
}