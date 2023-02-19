// TodoList가 쌓여 보여지는 페이지 

import axios from "axios"
import { useEffect } from "react"
import { StTopBox, StBox, StButton } from "../styles/styleCollection"
import { useState } from "react"
import { Link } from "react-router-dom"


function Todos() {

    const [todos, setTodos] = useState(null)

    const fetchTodos = async () => {
        const {data} =  await axios.get('http://localhost:4000/todos')
        console.log('data :', data)
        setTodos(data)
    }

    const DeleteButtonHandler = async (id) => {
        await axios.delete(`http://localhost:4000/todos/${id}`)
        fetchTodos()
    }
    
    useEffect(() => {
        fetchTodos()
    },[])



    return (
        <>  
            <StTopBox>
            <div><Link to = {`/`}>Home</Link></div>
            <div><Link to = {`/todos/Addtodo`}>할 일 추가</Link></div>
            </StTopBox>

            {todos?.map((todo)=>{
                return (
                <>
                <StBox key={todo.id}>
                    <div>제목 : {todo.title}</div>
                    <div>내용 : {todo.content}</div>
                    <div><Link to = {`/todos/${todo.id}`}>상세보기</Link></div>
                    <StButton onClick={()=>DeleteButtonHandler(todo.id)}>삭제</StButton>                    
                </StBox>
                </>
                )
            })}
            
        </>
    )
}

export default Todos