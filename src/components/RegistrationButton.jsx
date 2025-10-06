import React from 'react';
import styled from 'styled-components';
import Earth from '../assets/images/earth.png';
import Next from '../assets/icons/next-white.svg';

export const RegistrationButton = () => {
    return (
        <Wrapper>
            <DescWrapper>
                <Desc>내 물건의 새로운<br />가치를 찾아보세요!</Desc>
                <EarthImg src={Earth} alt="지구 이미지"/>
            </DescWrapper>
            <ButtonWrapper>
                <ButtonText>자원 등록</ButtonText>
                <NextImg src={Next} alt="다음 버튼 이미지"/>
            </ButtonWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border-radius: 15px;
    height: 120px;
    margin: 0 20px;
    position: relative;
    margin-top: 50px;
    background-color: ${({theme}) => theme.colors.mainColor};
`

const DescWrapper = styled.div`
    border-radius: 15px;
    height: 120px;
    width: 270px;
    position: absolute;
    display: flex;
    align-items: center;
    z-index: 1;
    background-color: #FFFFFF;
    overflow: hidden;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`

const Desc = styled.p`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    color: ${({theme}) => theme.colors.mainColor};
    margin-left: 15px;
`

const EarthImg = styled.img`
    width: 110px;
    position: absolute;
    bottom: -10px;
    right: 10px;
`

const ButtonWrapper = styled.button`
    background: linear-gradient(
        270deg,
        #0B9454 51%,
        #032E1A 100%
    );
    border-radius: 15px;
    height: 120px;
    width: 150px;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
    padding-right: 10px;
`

const ButtonText = styled.p`
    color: #FFFFFF;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    font-size: 15px;
`

const NextImg = styled.img`
    
`