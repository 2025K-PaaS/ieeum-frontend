import React, { useState } from 'react';
import * as S from './SignupPage.styled';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/icons/logo-green.svg';
import { GrayButton } from '../../components/GrayButton';
import { GreenButton } from '../../components/GreenButton';
import { InputWrapper } from '../../components/InputWrapper';

const SignupPage = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        if (id && password) {
            navigate('/signup2', {state: {id, password}});
        } else {
            alert('아이디와 비밀번호를 모두 입력해주세요.');
        }
    }

    return (
        <S.Wrapper>
            <S.PageIndicatorWrapper>
                <S.PageIndicator color='#0B9454'/>
                <S.PageIndicator color='#8E8E9325'/>
            </S.PageIndicatorWrapper>
            <S.Header>
                <S.Logo src={Logo} alt="이음 로고 이미지"/>
                <S.Title>이음 회원가입</S.Title>
            </S.Header>
            <S.InputWrappers>
                <InputWrapper 
                    title="아이디"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    spellcheck={false}
                />
                <InputWrapper 
                    title="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    spellcheck={false}
                />
            </S.InputWrappers>
            <S.ButtonWrapper>
                <GrayButton text="이전" width={120} onClick={() => navigate('/login')}/>
                <GreenButton text="다음" onClick={handleSignup} />
            </S.ButtonWrapper>
        </S.Wrapper>
    )
}

export default SignupPage
