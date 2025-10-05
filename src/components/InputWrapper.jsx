import React from 'react';
import styled from 'styled-components';

export const InputWrapper = ({ title, value, onChange }) => {
    return (
        <Wrapper onChange={onChange}>
            <Title>{title}</Title>
            <Input value={value} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
`

const Title = styled.h2`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    color: ${({theme}) => theme.colors.grayColor3};
    font-size: 15px;
    margin-bottom: 5px;
`

const Input = styled.input`
    border: 0;
    background-color: #F1F1F4;
    width: 100%;
    height: 50px;
    padding: 0 10px;
    border-radius: 15px;
`