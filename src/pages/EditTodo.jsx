import { StMiniFrame, StMiniBox, StMiniInputBox } from "../styles/miniPageFrame"
import { StButton } from "../styles/styleCollection"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import useInput from "../hooks/useInput"
import { __editTodo } from "../redux/modules/todosSlice"

function EditTodo() {

    const param = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const todo = useSelector((state) =>
        state.todos.todos.find((item) => item.id === parseInt(param.id))
    )

    // Set up state for the updated title and content
    const [updatedTitle, onChangeUpdatedTitleHandler] = useInput(todo.title);
    const [updatedContent, onChangeUpdatedContentHandler] = useInput(todo.content);

    // Event handler for submitting the updated todo
    const editTodoButtonHandler = (e) => {
        e.preventDefault();

        const updatedTodo = {
            id: todo.id,
            title: updatedTitle,
            content: updatedContent
        }

        // Dispatch the __editTodo action creator with the updated todo object
        dispatch(__editTodo(updatedTodo));

        // Navigate back to the Todos page
        navigate('/todos');
    }

    return (
        <>
            <StMiniFrame>
                <StMiniBox>
                    <form onSubmit={editTodoButtonHandler}>
                        <div style={{ marginRight: '270px' }}>수정 제목 :</div>

                        <div style={{ marginTop: '20px' }}>
                            <StMiniInputBox
                                value={updatedTitle}
                                onChange={onChangeUpdatedTitleHandler}
                            />
                        </div>

                        <div style={{ marginRight: '270px' }}>수정 내용 :</div>

                        <div style={{ marginTop: '20px' }}>
                            <StMiniInputBox
                                value={updatedContent}
                                onChange={onChangeUpdatedContentHandler}
                            />
                        </div>

                        <StButton style={{
                            marginLeft: '20px',
                            marginTop: '20px'
                        }}
                        >
                            수정 완료!
                        </StButton>
                    </form>
                </StMiniBox>
            </StMiniFrame>
        </>
    )
}

export default EditTodo
