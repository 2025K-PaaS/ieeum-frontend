import React from 'react';
import * as S from './RegistrationCreatePage.styled';
import { useLocation } from 'react-router-dom';


const RegistrationCreatePage = () => {
    const { state } = useLocation();

    return (
        <S.Wrapper>
            <img src={state.image} alt="자원 이미지" />
        </S.Wrapper>
    )
}

export default RegistrationCreatePage
