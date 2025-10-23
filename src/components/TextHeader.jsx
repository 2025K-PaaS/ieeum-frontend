import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Before from '../assets/icons/before.svg';

export const TextHeader = ({ text, buttonText, onClick }) => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <BackButton onClick={() => navigate(-1)}>
                <img src={Before} alt="이전 버튼 이미지" />
            </BackButton>
            <Title>{text}</Title>
            {buttonText && (
                <ButtonWrapper onClick={onClick}>
                    {buttonText}
                </ButtonWrapper>
            )}
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
    position: fixed;
    background-color: ${({theme}) => theme.colors.backColor};
`

const BackButton = styled.button`
    position: absolute;
    left: 20px;
`

const Title = styled.h1`
    font-size: 18px;
    color: ${({theme}) => theme.colors.blackColor};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

const ButtonWrapper = styled.button`
    color: #FFFFFF;
    background-color: ${({theme}) => theme.colors.pointColor};
    border-radius: 100px;
    font-size: 13px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    padding: 8px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
`