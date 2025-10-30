import React from 'react';
import styled from 'styled-components';

export const InputWrapper = ({ title, desc, value, onChange, height }) => {
    return (
        <Wrapper>
            <TitleWrappr>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
            </TitleWrappr>
            <Input value={value} height={height} onChange={onChange} spellcheck="false"/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
`

const TitleWrappr = styled.div`
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
`

const Title = styled.h2`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    color: ${({theme}) => theme.colors.grayColor3};
    font-size: 15px;
`

const Desc = styled.h3`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    color: ${({theme}) => theme.colors.grayColor1};
    font-size: 15px;
`

const Input = styled.input`
    border: 0;
    background-color: #F1F1F4;
    width: 100%;
    height: ${({height}) => (height ? `${height}px` : '50px')};
    padding: 0 10px;
    border-radius: 15px;
`