import React, { useState } from 'react';
import * as S from './LoginPage.styled';
import Logo from '../../assets/icons/logo-green.svg';
import { InputWrapper } from '../../components/InputWrapper';
import { GreenButton } from './../../components/GreenButton';
import { GrayButton } from '../../components/GrayButton';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../apis/axiosInstance';

const LoginPage = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (id && password) {
            try {
                const response = await axiosInstance.post('/auth/login', {
                    username: id,
                    password,
                });
                console.log('로그인 성공', response);
                localStorage.setItem('accessToken', response.data.access_token);
                navigate('/main');
            } catch(error) {
                console.log(error.response);
                alert('아이디 또는 비밀번호가 맞지 않습니다. 다시 확인해 주세요.')
            }
        } else {
            alert('아이디와 비밀번호를 모두 입력해주세요.');
        }
    }

    return (
        <S.Wrapper>
            <S.LogoWrapper>
                <S.Logo src={Logo} alt="이음 로고 이미지" />
                <S.Name>이 음</S.Name>
            </S.LogoWrapper>
            <S.Desc>AI 기반의 개인화된 자원 순환 플랫폼</S.Desc>
            <S.InputWrappers>
                <InputWrapper 
                    title="아이디" 
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <InputWrapper 
                    title="비밀번호"  
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={password}
                />
            </S.InputWrappers>
            <S.ButtonWrapper>
                <GreenButton text="로그인" onClick={handleLogin} />
                <GrayButton text="회원가입" onClick={() => navigate('/signup')} />
            </S.ButtonWrapper>
        </S.Wrapper>
    )
}

export default LoginPage
