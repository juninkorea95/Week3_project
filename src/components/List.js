// 홈 화면의 Todolist 이동 컴포넌트 
import { Link } from "react-router-dom"
import { StBox, StButton } from "../styles/styleCollection"

    function List() {
        return <StBox style = {{
          justifyContent: "space-between",
        }}>
    
            <div className ="left-text">TodoList 확인하기!</div>
            <div><Link to = {`/todos`}><StButton>Check!</StButton></Link></div>
          </StBox>
    
    }

export default List