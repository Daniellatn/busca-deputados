import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina'
import React from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import apiDeputados from '@/services/apiDeputados';
import Link from 'next/link';
import { formatarData, formatarReal } from '@/util/formatarValor';

const Detalhes = ({ deputado, despesas, profissoes }) => {
  return (
    <>
      <Pagina titulo={deputado.ultimoStatus.nome} />
      <Container>
        <Row className='mt-5'>
          <Col md={3}>
            <Card >
              <Card.Img variant="top" src={deputado.ultimoStatus.urlFoto} />
              <Card.Body>
                <Card.Title> {deputado.nomeCivil} </Card.Title>
                <Card.Text>
                  <strong>Partido: </strong>
                  {deputado.ultimoStatus.siglaPartido}
                </Card.Text>
                <Card.Text>
                  <strong>UF Partido: </strong>
                  {deputado.ultimoStatus.siglaUf}
                </Card.Text>
              </Card.Body>
            </Card>
            <Link href={'/deputados'} className='btn btn-primary mt-3 '>Voltar</Link>

          </Col>
          <Col md={6}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {despesas.map(item => (
                  <tr>
                    <td> {formatarData(item.dataDocumento)} </td>
                    <td> {item.tipoDespesa} </td>
                    <td> {formatarReal(item.valorLiquido)} </td>
                  </tr>
                ))}

              </tbody>
            </Table>
          </Col>
          <Col md={2}>
            <h4>Profissões: {profissoes.length}</h4>
            <ul>
              {profissoes.map(item => (
                <li key={item.id}> {item.titulo} </li>
              ))}

            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Detalhes

export async function getServerSideProps(context) {

  const idDeputado = context.params.idDeputados
  const resultado = await apiDeputados.get('/deputados/' + idDeputado)
  const deputado = resultado.data.dados

  const resDespesas = await apiDeputados.get('/deputados/' + idDeputado + '/despesas')
  const despesas = resDespesas.data.dados

  const resProfissao = await apiDeputados.get('/deputados/' + idDeputado + '/profissoes')
  const profissoes = resProfissao.data.dados

  return {
    props: { deputado, despesas, profissoes },
  }
}