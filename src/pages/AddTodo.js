// 할 일 추가하는 페이지 
import { StTopBox, StInputBox, StTextBox, StButtonBox, StButton } from "../styles/styleCollection"
import { Link, useNavigate } from "react-router-dom"
// import { useState } from "react"
import useInput from "../hooks/useInput"
import axios from "axios"

function AddTodo() {

    const navigate = useNavigate()

    const [title, onChangeTitleHandler] = useInput({
        title: ''
    })
    const [content, onChangeContentHandler] = useInput({
        content: ''
    })

    const onSubmitButtonHandler = async (newTodo) => {
        if (newTodo.title ==='' || newTodo.content === '') {
            alert ('제목, 내용을 모두 입력해 주세요!')
        } else {
            await axios.post('http://localhost:4000/todos', newTodo)
            navigate('/todos') // Redirect to the Todos page
        }
        
    }

    return (
    <>
        <StTopBox>
            <div><Link to = {`/`}>Home</Link></div>
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
            placeholder="제목을 입력해 주세요(50자 이내)"
            value = {title}
            onChange = {onChangeTitleHandler}
            />
        </StInputBox>

        <StTextBox>내용 :</StTextBox>

        <StInputBox>
            <input 
            type='text'
            placeholder="내용을 입력해 주세요(200자 이내)"
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
