import React, { useState } from 'react';
import * as S from './SignupPage.styled';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/icons/logo-green.svg';
import { GrayButton } from '../../components/GrayButton';
import { GreenButton } from '../../components/GreenButton';
import { InputWrapper } from '../../components/InputWrapper';
import { useLocation } from 'react-router-dom';
import axiosInstance from './../../apis/axiosInstance';

const SignupPage2 = () => {
    const { state } = useLocation();
    const [id, setId] = useState(state.id);
    const [password, setPassword] = useState(state.password);
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [number, setNumber] = useState('');
    const [destination, setDestination] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (name && nickname && number && destination) {
            try {
                const response = await axiosInstance.post('/auth/signup', {
                    username: id,
                    password,
                    name,
                    phone: number,
                    nickname,
                    address: destination
                });
                console.log('회원가입 성공', response);
                handleLogin();
            } catch(error) {
                if (error.response.data.detail[0].msg) {
                    alert(error.response.data.detail[0].msg);
                } else if (error.response.data.detail) {
                    alert(error.response.data.detail);
                }
                navigate('/signup');
            }
        } else {
            alert('이름, 닉네임, 전화번호, 배송지를 모두 입력해주세요.');
        }
    }

    const handleLogin = async () => {
        try {
            const response = await axiosInstance.post('/auth/login', {
                username: id,
                password,
            });
            console.log('로그인 성공', response);
            localStorage.setItem('accessToken', response.data.access_token);
            navigate('/main');
        } catch(error) {
            navigate('/signup');
            console.log(error.response);
        }
    }

    return (
        <S.Wrapper>
            <S.PageIndicatorWrapper>
                <S.PageIndicator color='#8E8E9325'/>
                <S.PageIndicator color='#0B9454'/>
            </S.PageIndicatorWrapper>
            <S.Header>
                <S.Logo src={Logo} alt="이음 로고 이미지"/>
                <S.Title>이음 회원가입</S.Title>
            </S.Header>
            <S.InputWrappers>
                <InputWrapper 
                    title="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <InputWrapper 
                    title="닉네임"
                    desc="(활동명)"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <InputWrapper 
                    title="전화번호"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <InputWrapper 
                    title="배송지"
                    height={84}
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
            </S.InputWrappers>
            <S.ButtonWrapper>
                <GrayButton text="이전" width={120} onClick={() => navigate('/signup')}/>
                <GreenButton text="다음" onClick={handleSignup} />
            </S.ButtonWrapper>
        </S.Wrapper>
    )
}

export default SignupPage2
