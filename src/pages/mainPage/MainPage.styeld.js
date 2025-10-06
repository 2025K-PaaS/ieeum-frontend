import styled from "styled-components";

export const Banner = styled.div`
    background-color: ${({theme}) => theme.colors.mainColor};
    padding: 10px 20px 0 20px;
`

export const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`

export const LogoWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 5px;
`

export const Logo = styled.img`
    width: 36px;
`

export const HeaderTitle = styled.p`
    color: #FFFFFF;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    font-size: 18px;
`

export const AlarmWrapper = styled.button`
    width: 16px;
`

export const Alarm = styled.img`
    width: 100%;
`

export const LevelWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Plant = styled.img`
    width: 187px;
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #E6E6E9;
    margin: 22px 0 15px 0;
`

export const ResourceRegisterTitle = styled.h4`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    font-size: 18px;
    color: ${({theme}) => theme.colors.blackColor};
    margin: 0 0 15px 20px;
`