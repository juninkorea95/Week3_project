// 할 일 추가하는 페이지 
import { StTopBox, StInputBox, StTextBox, StButtonBox, StButton } from "../styles/styleCollection"
import { Link, useNavigate } from "react-router-dom"
import useInput from "../hooks/useInput"
import { useDispatch } from "react-redux"
import { __addTodo } from "../redux/modules/todosSlice"

function AddTodo() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [title, onChangeTitleHandler] = useInput({
        title: ''
    })
    const [content, onChangeContentHandler] = useInput({
        content: ''
    })

    const onSubmitButtonHandler = (newTodo) => {
        if (newTodo.title ==='' || newTodo.content === '') {
            alert ('제목, 내용을 모두 입력해 주세요!')
        } else {
            dispatch(__addTodo(newTodo))
            .then(()=>{
                navigate('/todos') // Redirect to the Todos page
            })
            .catch((error) => {
                console.error('할 일 추가 실패', error)
            })
        }
    }

    return (
    <>
        <StTopBox>
            <div><Link to = {`/`} style={{ textDecoration: 'none', color: 'gray' }}>Home</Link></div>
            <div>React</div>
        </StTopBox>
        
        <form onSubmit={(e) => {
            e.preventDefault();

            const newTodo = {
                id: Date.now(),
                title: title,
                content: content,
            }

            onSubmitButtonHandler(newTodo)
        }}>
        <StTextBox>제목 :</StTextBox>

        <StInputBox>
            <input 
            type='text'
            maxLength={"20"}
            placeholder="제목을 입력해 주세요(20자 이내)"
            value = {title}
            onChange = {onChangeTitleHandler}
            />
        </StInputBox>

        <StTextBox>내용 :</StTextBox>

        <StInputBox>
            <input 
            type='text'
            maxLength={"100"}
            placeholder="내용을 입력해 주세요(100자 이내)"
            value = {content}
            onChange = {onChangeContentHandler}
            />
        </StInputBox>

        <StButtonBox><StButton>추가하기</StButton></StButtonBox>
        </form>
        
    </> 

    )
       
}

export default AddTodo
