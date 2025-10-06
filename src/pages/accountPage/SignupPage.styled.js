import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 20px 0 20px;
`

export const PageIndicatorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin: 0 auto 20px auto;
`

export const PageIndicator = styled.div`
    width: 10px;
    height: 10px;
    background-color: ${({color}) => color};
    border-radius: 50%;
`

export const Header = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 5px;
    margin-bottom: 32px;
`

export const Logo = styled.img`
    width: 36px;
`

export const Title = styled.h2`
    font-size: 18px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    color: ${({theme}) => theme.colors.mainColor};
`

export const InputWrappers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding: 0 15px;
`

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 15px;
    position: absolute;
    bottom: 120px;
    width: calc(100% - 40px);
`