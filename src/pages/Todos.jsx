// import { useEffect } from 'react';
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
    await dispatch(__fetchTodos());
  };


  return (
    <>
      <StTopBox>
        <div>
          <Link to={`/`}>Home</Link>
        </div>
        <div>
          <Link to={`/todos/Addtodo`}>할 일 추가</Link>
        </div>
      </StTopBox>

      {todos?.map((todo) => {
        return (
          <>
            <StBox key={todo.id}>
              <div>제목 : {todo.title}</div>
              <div>내용 : {todo.content}</div>
              <div>
                <Link to={`/todos/${todo.id}`}>상세보기</Link>
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
