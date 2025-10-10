import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Before from '../assets/icons/before.svg';

export const TextHeader = ({ text }) => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <ButtonWrapper onClick={() => navigate(-1)}>
                <img src={Before} alt="이전 버튼 이미지" />
            </ButtonWrapper>
            <Title>{text}</Title>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 44px;
    width: 100%;
    min-width: 393px;
    max-width: 420px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background-color: #FFFFFF;
`

const ButtonWrapper = styled.button`
    position: absolute;
    left: 20px;
`

const Title = styled.h1`
    font-size: 18px;
    color: ${({theme}) => theme.colors.blackColor};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`