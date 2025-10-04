import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.mainColor};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Logo = styled.img`
    width: 130px;
    margin-bottom: 10px;
`

export const Name = styled.h1`
    color: #FFFFFF;
    font-size: 40px;
    font-family: ${({ theme }) =>
    theme.fonts.TmoneyRoundWindExtraBold["font-family"]};
`