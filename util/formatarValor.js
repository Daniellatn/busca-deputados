export function formatarData(valor) {
  const data = new Date(valor)
  return data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
}

export function formatarReal(valor) {
  return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
}