import React, { useState } from 'react';
import { StInputBox,StButtonBox, StButton, StTextBox, StTopBox } from '../styles/styleCollection';
// import axios from 'axios';
import { useNavigate } from 'react-router';
import { loginInstance } from '../axios/api';


function Register () {
    const [idValue, setIdValue] = useState('');
    const [pwValue, setPwValue] = useState('');
    // 오류 메세지
    const [idMessage, setIdMessage] = useState('');
    const [pwMessage, setPwMessage] = useState('');

    // 유효성 검사 둘다 true 일시 버튼 클릭 가넝
    const [isId, setIsId] = useState(false);
    const [isPw, setIsPw] = useState(false);

    const navigate = useNavigate();

    // id input change
    const onChangeId = (e) => {
        setIdValue(e.target.value);

        const idRegex = /^(?=.*?[0-9])(?=.*?[a-z]).{5,}$/;

        if (!idRegex.test(e.target.value)) {
            setIdMessage('영어 소문자, 숫자 각각 1개 이상, 5자리 이상이여야 합니다.');
            setIsId(false);
        } else {
            setIdMessage('올바른 id 형식입니다');
            setIsId(true);
        }
    };
    // pw input change
    const onChangePw = (e) => {
        setPwValue(e.target.value);
        const idRegex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

        if (!idRegex.test(e.target.value)) {
            setPwMessage('패스워드는 최소 8자리 이상 영어 소문자, 숫자, 특수문자가 각각 1개 이상이여야 합니다.');
            setIsPw(false);
        } else {
            setPwMessage('올바른 패스워드 형식입니다.');
            setIsPw(true);
        }
    };

    // 회원가입
    const joinHandler = async () => {
        if (isId === true && isPw === true) {
            try {
                await loginInstance.post('/register', { id: idValue, password: pwValue });
                alert('회원가입 성공 !!');
                navigate('/');
            } catch (error) {
                alert(error.response.data.message);
            }
        }
    };


    return (
        <>
            <StTopBox style = {{backgroundColor: 'rgb(230, 270, 130)', fontWeight:'bold'}}>
                <div>My Todo List</div>
                <div>React</div>
            </StTopBox>

            <StTextBox>회원 가입</StTextBox>

                <StTextBox style ={{height: '20px'}}>ID : </StTextBox>
                <StInputBox>
                <input 
                style = {{height: '40px'}}
                type ="text"
                value = {idValue}
                onChange = {onChangeId}
                />
                </StInputBox>
                <span>{idMessage}</span>

                <StTextBox style ={{height: '20px'}}>Password : </StTextBox>
                <StInputBox>
                <input 
                style = {{height: '40px'}}
                type ="password"
                value = {pwValue}
                onChange = {onChangePw}
                />
                </StInputBox>
                <span>{pwMessage}</span>
                

            <StButtonBox style ={{marginTop : 0}}>
            <StButton type="button" onClick={joinHandler}>가입 완료</StButton>
            </StButtonBox>

        </>
    );
}

export default Register;