import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const FRAME = styled.div`
  display: flex;
  margin : 0 auto;
  justify-content: center;
  align-items: center;
  width:1500px;
  height: 800px;
`

const STBOX = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const RETURN = styled.div`
margin-top: 20px;
`

function Detail() {

  const param = useParams();
  const detail = useSelector((state) => state.todos.todos.find(item => item.id === parseInt(param.id)));

  return (
    <FRAME>
      {detail && (
        <STBOX>
          id : {detail.id}
          <br />
          제목 : {detail.title}
          <br />
          내용 : {detail.content}
          <br />
          <RETURN>
            <Link to="/todos">이전으로</Link>
          </RETURN>
        </STBOX>
      )}
    </FRAME>
  )
}


export default Detail
