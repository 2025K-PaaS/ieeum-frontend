import React, { useState } from 'react';
import * as S from './SignupPage.styled';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/icons/logo-green.svg';
import { GrayButton } from '../../components/GrayButton';
import { GreenButton } from '../../components/GreenButton';
import { InputWrapper } from '../../components/InputWrapper';

const SignupPage2 = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [number, setNumber] = useState('');
    const [destination, setDestination] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        if (name && nickname && number && destination) {
            navigate('/main');
        } else {
            alert('이름, 닉네임, 전화번호, 배송지를 모두 입력해주세요.');
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
