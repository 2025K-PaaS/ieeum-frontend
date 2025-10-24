import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 44px;
`

export const TotalWrapper = styled.div`
    background-color: #F1F1F5;
    padding: 14px 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 15px;
`

export const TotalRow = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const TotalTitle = styled.p`
    color: ${({theme}) => theme.colors.grayColor3};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    font-size: 15px;
`

export const TotalValue = styled.p`
    color: ${({theme}) => theme.colors.grayColor3};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    font-size: 15px;
`

export const PointWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 0 20px;
    width: 100%;
`

export const Point = styled.div`
    padding: 0 20px;
    border-bottom: 1px solid #E6E6E9;
    width: 100%;
`

export const Name = styled.p`
    color: ${({theme}) => theme.colors.grayColor3};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    font-size: 15px;
    text-align: start;
`

export const DescWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px 0 9px 0;
`

export const CountWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`

export const CountTitle = styled.p`
    color: ${({theme}) => theme.colors.grayColor2};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    font-size: 15px;
`

export const Count = styled.p`
    color: ${({theme}) => theme.colors.grayColor3};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    font-size: 13px;
`

export const BadgeWrapper = styled.div`
    background-color: ${({theme}) => theme.colors.yellowGreenColor};
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 18px;
    height: 24px;
`

export const BadgeText = styled.p`
    color: #FFFFFF;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    font-size: 13px;
    line-height: 16px;
`