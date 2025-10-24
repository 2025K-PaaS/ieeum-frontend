import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 44px;
`

export const Container = styled.div`
    padding: 0 20px;
    margin-bottom: 15px;
`

export const Title = styled.h1`
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    margin: 15px 20px;
`

export const ResourceImage = styled.img`
    width: -webkit-fill-available;;
    height: 260px;
    border-radius: 15px;
    object-fit: cover;
    margin: 0 20px;
`

export const SectionDivider = styled.div`
    background-color: #E6E6E9;
    height: 1px;
    width: 100%;
    margin: 15px 0;
`

export const SubTitle = styled.h3`
    font-size: 15px;
    color: ${({theme}) => theme.colors.grayColor1};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    margin-bottom: 15px;
`

export const DescWrapper = styled.div`
    background-color: #F1F1F5;
    border-radius: 15px;
    padding: 15px;
    display: flex;
    flex-direction: column;
`

export const CategoryWarpper = styled.div`
    display: flex;
    align-items: flex-start;
`

export const Category = styled.p`
    color: ${({theme}) => theme.colors.grayColor2};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    font-size: 15px;
    margin-right: 3px;
    flex-shrink: 0;
`

export const Value = styled.p`
    color: ${({theme}) => theme.colors.grayColor3};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    font-size: 15px;
`

export const Divider = styled.div`
    background-color: #DCDCE0;
    width: 100%;
    margin: 10px 0;
    height: 1px;
`

export const Line = styled.div`
    margin-bottom: 15px;
    width: 100%;
    height: 12px;
    background-color: #F1F1F5;
`

export const MatchingContainer = styled.div`
    padding: 0 20px;
    margin-bottom: ${({isNavbarShown}) => isNavbarShown ? '85px' : '15px'};
`

export const Title2 = styled.h2`
    font-size: 18px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    margin: 15px 0;
`

export const DescWrapper2 = styled.div`
    background-color: #F1F1F5;
    border-radius: 15px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const TwoButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 15px;
    margin: 15px 0;
`