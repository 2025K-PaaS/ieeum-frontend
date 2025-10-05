import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 35px;
`

export const LogoWrapper = styled.div`
    margin-top: 85px;
    display: flex;
    align-items: flex-end;
    gap: 10px;
`

export const Logo = styled.img`
    width: 90px;
`

export const Name = styled.h1`
    color: ${({ theme }) => theme.colors.mainColor};
    font-family: ${({ theme }) =>
    theme.fonts.TmoneyRoundWindExtraBold["font-family"]};
    font-size: 40px;
`

export const Desc = styled.p`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    font-size: 15px;
    color: #8E8E93;
    margin: 20px 0 54px 0;
`

export const InputWrappers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    margin-bottom: 60px;
`

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`