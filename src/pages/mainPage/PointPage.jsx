import React from 'react';
import * as S from './PointPage.styled';
import { TextHeader } from './../../components/TextHeader';
import { pointData } from './../../constant/pointData';

const PointPage = () => {
    return (
        <>
            <TextHeader text="포인트 내역" />
            <S.Wrapper>
                <S.TotalWrapper>
                    <S.TotalRow>
                        <S.TotalTitle>현재 포인트 |</S.TotalTitle>
                        <S.TotalValue>3,000P</S.TotalValue>
                    </S.TotalRow>
                    <S.TotalRow>
                        <S.TotalTitle>누적 포인트 |</S.TotalTitle>
                        <S.TotalValue>12,000P</S.TotalValue>
                    </S.TotalRow>
                </S.TotalWrapper>
                <S.PointWrapper>
                    {pointData.map((point, index) => (
                        <S.Point key={index}>
                            <S.Name>{point.name}</S.Name>
                            <S.DescWrapper>
                                <S.CountWrapper>
                                    <S.CountTitle>수량 |</S.CountTitle>
                                    <S.Count>{point.count}</S.Count>
                                </S.CountWrapper>
                                <S.BadgeWrapper>
                                    <S.BadgeText>{point.point.toLocaleString()} P</S.BadgeText>
                                </S.BadgeWrapper>
                            </S.DescWrapper>
                        </S.Point>
                    ))}
                </S.PointWrapper>
            </S.Wrapper>
        </>
    )
}

export default PointPage
