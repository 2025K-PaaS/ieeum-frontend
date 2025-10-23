import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Plus from '../assets/icons/plus-white.svg';

export const PlusButton = () => {
    const naviate = useNavigate();

    const [isClicked, setIsClicked] = useState(false);
    
    const handleToggle = () => {
        setIsClicked((prev) => !prev);
    }

    return (
        <Wrapper isClicked={isClicked}>
            {isClicked && (
                <>
                    <TextButton onClick={() => naviate('/registration/camera')}>자원 등록</TextButton>
                    <Line />
                    <TextButton>요청 등록</TextButton>
                </>
            )}
            <PlusButtonWrapper onClick={handleToggle}>
                <PlusImg src={Plus} alt='플러스 버튼 이미지'/>
            </PlusButtonWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: ${({isClicked}) => (isClicked ? '#FFFFFF' : '#ffffff0')};
    width: 57px;
    height: ${({isClicked}) => (isClicked ? '144px' : '52px')};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 25px;
    position: fixed;
    right: calc(50% - 200px);
    bottom: 100px;
    border-radius: 100px;
    transition: all 0.3s ease;
    box-shadow: ${({isClicked}) => (isClicked ? '0px 0px 4px rgba(0, 0, 0, 0.25)' : 'none')};
`

const TextButton = styled.button`
    font-size: 12px;
    color: ${({theme}) => theme.colors.grayColor2};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
`

const Line = styled.div`
    width: 38px;
    height: 1px;
    background-color: #E9E9E9;
    margin: 10px 0;
`

const PlusButtonWrapper = styled.button`
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.mainColor};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 2px;
`

const PlusImg = styled.img`
    width: 23px;
    height: 23px;
`