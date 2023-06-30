export const dateDifToText = (date: Date): string => {
  const now = new Date().getTime()
  const then = date.getTime()

  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  const week = day * 7
  const month = day * 30
  const year = month * 12

  const dif = now - then

  if (dif < 0) return 'no futuro'

  if (dif > year * 5) return `há muito tempo`

  if (dif > year)
    return `há ${parseInt(`${dif / year}`)} ${dif / year > 2 ? 'anos' : 'ano'}`

  if (dif > month)
    return `há ${parseInt(`${dif / month}`)} ${
      dif / month > 2 ? 'meses' : 'mês'
    }`

  if (dif > week)
    return `há ${parseInt(`${dif / week}`)} ${
      dif / week > 2 ? 'semanas' : 'semana'
    }`

  if (dif > day)
    return `há ${parseInt(`${dif / day}`)} ${dif / day > 2 ? 'dias' : 'dia'}`

  if (dif > hour)
    return `há ${parseInt(`${dif / hour}`)} ${
      dif / hour > 2 ? 'horas' : 'hora'
    }`

  if (dif > minute)
    return `há ${parseInt(`${dif / minute}`)} ${
      dif / minute > 2 ? 'minutos' : 'minuto'
    }`

  return 'há pouco tempo'
}

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    year: 'numeric',
  }).format(date)
