import { StTopBox, StTextBox, StInputBox, StButtonBox, StButton } from "../styles/styleCollection"
import useInput from "../hooks/useInput"
import { useNavigate } from "react-router-dom"

function Login () {

    const [id, onChangeIdHandler] = useInput('')
    const [pw, onChangePwHandler] = useInput('')

    const navigate = useNavigate()
    
    return (
        <>
            <StTopBox style = {{backgroundColor: 'rgb(230, 270, 130)', fontWeight:'bold'}}>
                <div>My Todo List</div>
                <div>React</div>
            </StTopBox>

            <StTextBox>Login</StTextBox>

                
                <StTextBox style ={{height: '20px'}}>ID : </StTextBox>
                <StInputBox>
                <input 
                style = {{height: '40px'}}
                type ="text"
                value = {id}
                onChange = {onChangeIdHandler}
                />
                </StInputBox>
                

                <StTextBox style ={{height: '20px'}}>Password : </StTextBox>
                <StInputBox>
                <input 
                style = {{height: '40px'}}
                type ="password"
                value = {pw}
                onChange = {onChangePwHandler}
                />
                </StInputBox>
                

            <StButtonBox style ={{marginTop : 0}}>
            <StButton>로그인</StButton>
            <StButton onClick={()=>{navigate('/register')}}>회원 가입</StButton>
            </StButtonBox>

        </>
    )
}

export default Login 