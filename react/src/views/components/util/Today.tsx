import styled from 'styled-components'

const Day = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
`

const Today = () => {
  const now = new Date()
  const [year, month, date, day] = [
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate(),
    now.getDay(),
  ]
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return <Day>{`${year}-${month}-${date} ${week[day]}`}</Day>
}

export default Today
