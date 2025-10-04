import React, { useEffect } from 'react';
import LogoWhite from '../../assets/icons/logo-white.svg';
import * as S from './SplashPage.styled';
import { useNavigate } from 'react-router-dom';

const SplashPage = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login');
        }, 2000);

        return() => clearTimeout(timer);
    }, [navigate]);

    return (
        <S.Wrapper>
            <S.Logo src={LogoWhite} alt="이음 로고 이미지" />
            <S.Name>이 음</S.Name>
        </S.Wrapper>
    )
}

export default SplashPage
