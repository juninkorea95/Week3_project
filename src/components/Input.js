// 홈 화면의 입력란 이동 컴포넌트 
import { Link } from "react-router-dom"
import { StBox, StButton } from "../styles/styleCollection"

    function Input() {
        return <StBox style ={{
            justifyContent: "space-between",
          }}>
    
            <div className ="left-text">할 일 기록하기</div>
            <div><Link to = {`/todos/AddTodo`}><StButton>Go</StButton></Link></div>
          </StBox>
    
    }

export default Input