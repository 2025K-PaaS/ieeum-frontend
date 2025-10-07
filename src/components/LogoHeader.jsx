import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/icons/logo-green.svg';

export const LogoHeader = ({ text }) => {
    return (
        <Wrapper>
            <LogoImg src={Logo} alt="이음 로고 이미지" />
            <Title>{text}</Title>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 44px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    position: fixed;
    background-color: ${({theme}) => theme.colors.backColor};
    width: 100%;
    min-width: 393px;
    max-width: 420px;
`

const LogoImg = styled.img`
    width: 36px;
    margin-right: 5px;
`

const Title = styled.h1`
    font-size: 18px;
    color: ${({theme}) => theme.colors.blackColor};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`