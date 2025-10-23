import styled from "styled-components"

export const Wrapper = styled.div`
    height: 100%;
`

export const Container = styled.div`
    padding: 0 20px;
`

export const Title = styled.input`
    margin-top: 56px;
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    color: ${({theme}) => theme.colors.blackColor};
    background-color: #FCFCFF;
    border: 0;
`

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    gap: 10px;
`

export const ImageButtonWrapper = styled.button`
    background-color: #DCDCDF;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: 100px;
    width: 120px;
    height: 33px;
`

export const ImageButtonText = styled.p`
    font-size: 13px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    color: ${({theme}) => theme.colors.grayColor2};
`

export const ImageName = styled.p`
    font-size: 13px;
    color: ${({theme}) => theme.colors.grayColor3};
`

export const ButtonImage = styled.img`
    width: 18px;
`

export const Line = styled.div`
    margin: 20px 0;
    width: 100%;
    height: 1px;
    background-color: #E6E6E9;
`

export const SubTitle = styled.h2`
    font-size: 18px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    margin-bottom: 10px;

`
export const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const Detail = styled.div`
    width: 100%;
    background-color: #F1F1F5;
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
    line-height: 18px;
    flex-shrink: 0;
`

export const Value = styled.textarea`
    font-size: 13px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    color: ${({theme}) => theme.colors.grayColor3};
    line-height: 16px;
    border: 0;
    background-color: #F1F1F5;
    width: 100%;
    resize: none;
    padding: 0;

    &:focus {
        outline: none;
    }
`

export const ButtonWrapper = styled.div`
    position: absolute;
    bottom: 140px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    padding: 0 20px;
`