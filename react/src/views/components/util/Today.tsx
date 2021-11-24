import styled from 'styled-components';

const Day = styled.div`
    color: #fff;
`


const Today = () => {
    const now = new Date()
    const [year, month, day] = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
    return (
        <Day>{`${year}-${month}-${day}`}</Day>
    )
}

export default Today
