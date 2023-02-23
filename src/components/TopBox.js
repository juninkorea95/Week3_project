// 홈 화면의 핑크색 TopBox 컴포넌트
import {StTopBox} from "../styles/styleCollection.js"
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function TopBox() {
    const [cookies, removeCookie] = useCookies(['accessJWTToken']);
    const navigate = useNavigate();

    const handleLogout = () => {
        removeCookie('accessJWTToken');
        navigate('/');
    }

    return (
        <StTopBox>
            <div>My Todo List</div>
            <button onClick={handleLogout}>Log out</button>
        </StTopBox>
    );
}

export default TopBox;
