import { StTopBox, StTextBox, StInputBox, StButtonBox, StButton } from "../styles/styleCollection"
import useInput from "../hooks/useInput"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { __addUser } from "../redux/modules/usersSlice"


function Register () {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [newId, onChangeNewIdHandler] = useInput('')
    const [newPw, onChangeNewPwHandler] = useInput('')

    const onSubmitButtonHandler = (newUser) => {
        if (newUser.newId ==='' || newUser.newPw === '') {
            alert ('ID, 비밀번호를 모두 입력해 주세요!')
        } else {
            dispatch(__addUser(newUser))
            .then(()=>{
                navigate('/')
            })
            .catch((error) => {
                console.error('회원가입 실패', error)
            })
        }
    }


    return (
        <>
            <StTopBox style = {{backgroundColor: 'rgb(230, 270, 130)', fontWeight:'bold'}}>
                <div>My Todo List</div>
                <div>React</div>
            </StTopBox>

            <StTextBox>회원 가입</StTextBox>

                <form
                onSubmit={(e) => {
                    e.preventDefault()

                    const newUser = {
                        id : Date.now(),
                        newId : newId,
                        newPw : newPw,
                    }

                    onSubmitButtonHandler(newUser)
                }}
                >
                <StTextBox style ={{height: '20px'}}>ID : </StTextBox>
                <StInputBox>
                <input 
                style = {{height: '40px'}}
                type ="text"
                value = {newId}
                onChange = {onChangeNewIdHandler}
                />
                </StInputBox>
                

                <StTextBox style ={{height: '20px'}}>Password : </StTextBox>
                <StInputBox>
                <input 
                style = {{height: '40px'}}
                type ="password"
                value = {newPw}
                onChange = {onChangeNewPwHandler}
                />
                </StInputBox>
                

            <StButtonBox style ={{marginTop : 0}}>
            <StButton>가입 완료</StButton>
            </StButtonBox>
            </form>

        </>
    )
}

export default Register