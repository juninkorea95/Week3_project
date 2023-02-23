import { StTopBox, StTextBox, StInputBox, StButtonBox, StButton } from "../styles/styleCollection"
import useInput from "../hooks/useInput"
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useCookies } from 'react-cookie';

function Login () {
    const navigate = useNavigate()

    const [id, onChangeIdHandler] = useInput('')
    const [pw, onChangePwHandler] = useInput('')

    const [message, setMessage] = useState('');
    const [token, setToken] = useState('');

    const [cookies, setCookie, removeCookie] = useCookies();
    const [now] = useState(new Date());
    const [after10m] = useState(new Date());
    const [isCheck, setIsCheck] = useState(false);

    // 로그인 버튼 클릭 -> 입력 검사 -> 입력값 /login에 POST
    const loginHandler = async () => {
        if (id !=='' && pw !== '') {
            try {
                const response = await axios.post('http://3.38.191.164/login', {id: id, password: pw});
                const userToken = response.data.token;

                after10m.setMinutes(now.getMinutes() + 1);

                axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
                setCookie('accessJWTToken', userToken, { path: '/', expires: after10m });
                setIsCheck(true);
                alert ('로그인 성공!')
                navigate('/home') // 요거 잘 되나 확인

            } catch (error) {
                setMessage(error.response.data.message);
                alert(message)
            }
        }
    }

    const checkUser = () => {
        if (isCheck) {
            const token = cookies.accessJWTToken;
            axios
                .get('http://3.38.191.164/user', {
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`,
                        'X-Custom-Header': 'value',
                    },
                })
                .catch(() => {
                    alert('토큰이 만료되어 로그아웃 되었습니다');
                });
        }
    };

    useEffect(() => {
        checkUser();
    }, []);
   
    
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
            <StButton type= 'button' onClick={loginHandler}>로그인</StButton>
            <StButton onClick={()=>{navigate('/register')}}>회원 가입</StButton>
            </StButtonBox>

        </>
    )
}

export default Login 