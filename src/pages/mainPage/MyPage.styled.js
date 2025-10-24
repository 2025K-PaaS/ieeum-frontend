import { styled } from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    height: 100%;
`

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

export const ActivityWrapper = styled.div`
    background-color: #FFFFFF;
    margin: 48px 0 15px 0;
    padding: 16px 0;
    height: 100%;
    flex: 1;
`

export const ActivityTitle = styled.h2`
    color: ${({theme}) => theme.colors.grayColor3};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    font-size: 18px;
    margin: 0 20px;
`

export const TextButtonWrapper = styled.div`
    margin: 15px 20px;
`

export const TextButton = styled.button`
    width: 50%;
    border-bottom: ${({isClicked}) => isClicked ? '2px solid #0B9454' : '2px solid #E9E9E9'};
    padding-bottom: 5px;
    font-size: 15px;
    font-family: ${({isClicked, theme}) => isClicked ? theme.fonts.PretendardSemiBold["font-family"] : theme.fonts.PretendardMedium["font-family"]};
    color: ${({isClicked, theme}) => isClicked ? theme.colors.blackColor : '#8E8E93'};
`

export const ResourceWrapper = styled.div`
    padding-bottom: 60px;
`