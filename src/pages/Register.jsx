import React, { useState } from 'react';
import { StInputBox,StButtonBox, StButton, StTextBox, StTopBox } from '../styles/styleCollection';
import axios from 'axios';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const StyledStTextBox = styled(StTextBox)`
  width  : ${(props) => props.width || '600px'};
  height: ${(props) => props.height || '50px'};
  font-size: ${(props) => props.fontSize || '10px'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  color: ${(props) => props.color || 'red'};
`

const StNewTopBox = styled(StTopBox)`
width: ${(props) => props.width || '600px'};
`
const StNewTextBox = styled(StTextBox)`
width: ${(props) => props.width || '600px'};
`

const StNewInputBox = styled(StInputBox)`
width: ${(props) => props.width || '600px'};
`

const StNewButtonBox = styled(StButtonBox)`
width: ${(props) => props.width || '600px'};
justify-content: ${(props) => props.justifyContent || 'center'};
`


function Register () {
    const [idValue, setIdValue] = useState('');
    const [pwValue, setPwValue] = useState('');
    // 오류 메세지
    const [idMessage, setIdMessage] = useState('');
    const [pwMessage, setPwMessage] = useState('');

    // 유효성 검사 둘다 true 일시 버튼 클릭 가능
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
                await axios.post('http://3.38.191.164/register', { id: idValue, password: pwValue });
                alert('회원가입 성공 !!');
                navigate('/');
            } catch (error) {
                alert(error.response.data.message);
            }
        } else {
            alert ('규정에 맞는 아이디와 비밀번호를 입력해 주세요!')
        }
    };


    return (
        <div style ={{marginTop: '70px'}}>
            <StNewTopBox style = {{backgroundColor: 'rgb(230, 270, 130)', fontWeight:'bold'}}>
                <div>My Todo List</div>
                <div>React</div>
            </StNewTopBox>

            <StNewTextBox>회원 가입</StNewTextBox>

                <StNewTextBox style ={{height: '20px'}}>ID : </StNewTextBox>
                <StNewInputBox>
                <input 
                style = {{height: '40px'}}
                type ="text"
                value = {idValue}
                onChange = {onChangeId}
                />
                </StNewInputBox>
                <StyledStTextBox>{idMessage}</StyledStTextBox>

                <StNewTextBox  style ={{height: '20px'}}>Password : </StNewTextBox>
                <StNewInputBox>
                <input 
                style = {{height: '40px'}}
                type ="password"
                value = {pwValue}
                onChange = {onChangePw}
                />
                </StNewInputBox>
                <StyledStTextBox>{pwMessage}</StyledStTextBox>
                

            <StNewButtonBox style ={{marginTop : 0}}>
            <StButton type="button" onClick={joinHandler}>가입 완료</StButton>
            <StButton onClick={()=>{navigate('/')}}>이전으로</StButton>
            </StNewButtonBox>

        </div>
    );
}

export default Register;