import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 44px 0 90px 0;
`

export const Container = styled.div`
    padding: 0 20px;
`

export const Title = styled.h1`
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    margin: 13px 0;
`

export const RegistrationImage = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 15px;
`

export const Line = styled.div`
    background-color: #E6E6E9;
    height: 1px;
    width: 100%;
    margin-top: 15px;
`

export const SubTitle = styled.h3`
    font-size: 15px;
    color: ${({theme}) => theme.colors.grayColor1};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    margin: 20px 0 15px 0;
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
    line-height: 18px;
`

export const Value = styled.p`
    color: ${({theme}) => theme.colors.grayColor3};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    font-size: 13px;
    line-height: 16px;
`

export const Divider = styled.div`
    background-color: #DCDCE0;
    width: 100%;
    margin: 10px 0;
    height: 1px;
`

export const BottomSheetWrapper = styled.div`
    padding: 0 20px;
`

export const BottomSheetTitle = styled.h2`
    font-size: 18px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`

export const CountWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const Count = styled.p`
    margin: 0 5px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    font-size: 15px;
    width: 24px;
    text-align: center;
`

export const CountButtonWrapper = styled.button`
    border-radius: 50%;
    width: 27px;
    height: 27px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
`

export const DestinationWrapper = styled.div`
    background-color: #F4F4F5;
    border-radius: 15px;
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
`

export const CategoryWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 5px;
`

export const BottomsheetCategory = styled.p`
    font-size: 15px;
    color: ${({theme}) => theme.colors.grayColor2};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    line-height: 18px;
`

export const BottomsheetValue = styled.p`
    font-size: 13px;
    color: ${({theme}) => theme.colors.grayColor3};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    line-height: 16px;
`

export const ButtonWrapper = styled.div`
    margin: 25px 0 50px 0;
`