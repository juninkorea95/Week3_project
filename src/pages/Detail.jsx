import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { StButton } from '../styles/styleCollection'
import { StMiniFrame, StMiniBox, StReturnText } from '../styles/miniPageFrame';


function Detail() {

  const param = useParams();
  const detail = useSelector((state) => state.todos.todos.find(item => item.id === parseInt(param.id)));

  return (
    <StMiniFrame>
      {detail && (
        <StMiniBox>
          id : {detail.id}
          <br />
          제목 : {detail.title}
          <br />
          내용 : {detail.content}
          <br />
          <StReturnText>
            <StButton style = {{}}>
            <Link to="/todos" style={{ textDecoration: 'none', color: 'white' }}>이전으로</Link>
            </StButton>
            <StButton style = {{}}>
            <Link to= {`/todos/${param.id}/EditTodo`} style={{ textDecoration: 'none', color: 'white' }}>수정</Link>
            </StButton>
          </StReturnText>
        </StMiniBox>
      )}
    </StMiniFrame>
  )
}


export default Detail
