import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
`

export const RegistrationImage = styled.img`
    height: 100%;
`

export const BottomSheetWrapper = styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    color: ${({theme}) => theme.colors.blackColor};
    margin-bottom: 17px;
`

export const SubTitle = styled.h2`
    font-size: 18px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    margin-bottom: 10px;
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

export const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Detail = styled.div`
    width: 100%;
    background-color: #F4F4F5;
    display: flex;
    align-items: flex-start;
    border-radius: 15px;
    padding: 12px 15px;
    gap: 3px;
`

export const Category = styled.p`
    font-size: 15px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    color: ${({theme}) => theme.colors.grayColor2};
    line-height: 100%;
    flex-shrink: 0;
`

export const Value = styled.textarea`
    font-size: 13px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    color: ${({theme}) => theme.colors.grayColor3};
    line-height: 15px;
    border: 0;
    background-color: #F4F4F5;
    width: 100%;
    resize: none;
    padding: 0;

    &:focus {
        outline: none;
    }
`

export const ButtonWrapper = styled.div`
    margin: 20px 0 50px 0;
`