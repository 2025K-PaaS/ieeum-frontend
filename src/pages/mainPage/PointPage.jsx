import React, { useEffect, useState } from 'react';
import * as S from './PointPage.styled';
import { TextHeader } from './../../components/TextHeader';
import { pointData } from './../../constant/pointData';
import axiosInstance from './../../apis/axiosInstance';

const PointPage = () => {
    const [currentPoint, setCurrentPoint] = useState(0);
    const [totalPoint, setTotalPoint] = useState(0);

    const handlePoint = async () => {
        try {
            const response = await axiosInstance.get('/points/me');
            console.log('포인트 조회', response.data);
            setCurrentPoint(response.data.balance);
            setTotalPoint(response.data.lifetime_earned);
        } catch(error) {
            console.log('포인트 조회 실패', error.response);
        }
    }

    useEffect(() => {
        handlePoint();
    }, [])

    return (
        <>
            <TextHeader text="포인트 내역" />
            <S.Wrapper>
                <S.TotalWrapper>
                    <S.TotalRow>
                        <S.TotalTitle>현재 포인트 |</S.TotalTitle>
                        <S.TotalValue>{currentPoint.toLocaleString()}P</S.TotalValue>
                    </S.TotalRow>
                    <S.TotalRow>
                        <S.TotalTitle>누적 포인트 |</S.TotalTitle>
                        <S.TotalValue>{totalPoint.toLocaleString()}P</S.TotalValue>
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
