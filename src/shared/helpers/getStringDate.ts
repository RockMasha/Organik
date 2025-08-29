const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function getStringDate(date: Date) {
  const time = new Date(date)
  const day = time.getDate()
  const mouth = time.getMonth()
  const year = time.getFullYear()
  const hours = time.getHours()
  const minutes =
    Number(time.getMinutes()) > 9 ? time.getMinutes() : '0' + time.getMinutes()
  const stringDate = `${day} ${months[mouth]}, ${year}, ${hours}:${minutes}`
  return stringDate
}
