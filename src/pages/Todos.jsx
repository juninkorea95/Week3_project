import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { StTopBox, StBox, StButton } from '../styles/styleCollection';
import { Link } from 'react-router-dom';
import { __fetchTodos, __deleteTodo } from '../redux/modules/todosSlice';

function Todos() {

  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__fetchTodos());
  },[dispatch]);

  const deleteButtonHandler = async (id) => {
    await dispatch(__deleteTodo(id));
  };


  return (
    <>
      <StTopBox>
        <div>
          <Link to={`/home`}
          style={{ textDecoration: 'none', color: 'gray' }}>Home</Link>
        </div>
        <div>
          <Link to={`/todos/Addtodo`}
          style={{ textDecoration: 'none', color: 'gray' }}>할 일 추가</Link>
        </div>
      </StTopBox>

      {todos?.map((todo) => {
        return (
          <>
            <StBox key={todo.id}>
              <div>제목 : {todo.title}</div>
              <div>내용 : {todo.content}</div>
              <div>
                <Link to={`/todos/${todo.id}`} 
                style={{ textDecoration: 'none', color: 'red' }}>상세보기</Link>
              </div>
              <StButton onClick={() => deleteButtonHandler(todo.id)}>
                삭제
              </StButton>
            </StBox>
          </>
        );
      })}
    </>
  );
}

export default Todos;
