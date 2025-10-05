import React from 'react';
import styled from 'styled-components';

export const GreenButton = ({text, width, onClick}) => {
    return (
        <Wrapper width={width} onClick={onClick}>
            {text}
        </Wrapper>
    )
}

const Wrapper = styled.button`
    background-color: ${({theme}) => theme.colors.mainColor};
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: ${({width}) => (width ? `${width}px` : '100%')};
    border-radius: 15px;
    font-size: 18px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
`
