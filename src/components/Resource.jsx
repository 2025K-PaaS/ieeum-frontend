import React from 'react';
import styled from 'styled-components';
import { NotCompletedBadge, CompletedBadge, ProgressBadge, SuccessBadge, FailBadge } from './StateBadge';

export const Resource = ({ name, type, material, image, state, onClick=null }) => {
    return (
        <Wrapper onClick={onClick}>
            <InfoWrapper>
                <Name>{name}</Name>
                <CategoryWrapper>
                    <Category>
                        <CategoryTitle>종류 |</CategoryTitle>
                        <CategoryDesc>{type}</CategoryDesc>
                    </Category>
                    <Category>
                        <CategoryTitle>재질 |</CategoryTitle>
                        <CategoryDesc>{material}</CategoryDesc>
                    </Category>
                </CategoryWrapper>
                {state==="available" || state==="pending" ? (
                    <NotCompletedBadge />
                ) : state==="matched" ? (
                    <CompletedBadge />
                ) : state==="progress" ? (
                    <ProgressBadge />
                ) : state==="success" ? (
                    <SuccessBadge />
                ) : <FailBadge />}
            </InfoWrapper>
            {image && <ResourceImg src={image}/>}
        </Wrapper>
    )
}

const Wrapper = styled.button`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 20px 15px 20px;
    border-bottom: 1px solid #E6E6E9;
    padding-bottom: 15px;
    width: -webkit-fill-available;
`

const InfoWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

const Name = styled.h1`
    font-size: 15px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    margin-bottom: 15px;
    color: ${({theme}) => theme.colors.grayColor3};
`

const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 9px;
`

const Category = styled.div`
    display: flex;
`

const CategoryTitle = styled.p`
    font-size: 15px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    color: ${({theme}) => theme.colors.grayColor2};
`

const CategoryDesc = styled.p`
    font-size: 15px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    color: ${({theme}) => theme.colors.grayColor3};
    margin-left: 2px;
`

const ResourceImg = styled.img`
    height: 113px;
    width: 106px;
    object-fit: cover;
    border-radius: 15px;
`