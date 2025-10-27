import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Sprout from '../assets/images/sprout.png';
import Badge from '../assets/icons/badge.svg';
import Next from '../assets/icons/next-black.svg';
import axiosInstance from './../apis/axiosInstance';

export const Banner = ({ page }) => {
    const navigate = useNavigate();
    
    const [nickname, setNickname] = useState('지구 지킴이');
    const [level, setLevel] = useState(2);
    const [badgeTitle, setBadgeTitle] = useState('새싹 탐험가');
    const [point, setPoint] = useState(12000);

    const handleNickname = async () => {
        try {
            const response = await axiosInstance.get('/auth/me');
            console.log('사용자 닉네임 조회', response.data);
            setNickname(response.data.nickname);
        } catch(error) {
            console.log('사용자 닉네임 조회 실패', error.response);
        }
    }

    const handlePoint = async () => {
        try {
            const response = await axiosInstance.get('/points/me');
            console.log('포인트 조회', response.data);
            setLevel(response.data.level);
            setBadgeTitle(response.data.title);
            setPoint(response.data.lifetime_earned);
        } catch(error) {
            console.log('포인트 조회 실패', error.response);
        }
    }

    useEffect(() => {
        handleNickname();
        handlePoint();
    }, [])

    return (
        <Wrapper>
            <Plant src={Sprout}/>
            <DescWrapper>
                {page==="home" && <Hello>안녕하세요</Hello>}
                <Nickname>{nickname} 님</Nickname>
                <Level>Lv. {level}</Level>
                <BadgeTitle>{badgeTitle}</BadgeTitle>
                {page==="mypage" && <PointBadge>누적 포인트 {point.toLocaleString()}P</PointBadge>}
            </DescWrapper>
            <PointWrapper>
                <BadgeWrapper>
                    <BadgeImg src={Badge} alt="배지 이미지"/>
                    <BadgeText>P</BadgeText>
                </BadgeWrapper>
                <PointText>포인트</PointText>
                <Line />
                <PointAmount>{point.toLocaleString()}P</PointAmount>
                <NextWrapper onClick={() => navigate('/point')}>
                    <NextImg src={Next} alt="다음 버튼 이미지"/>
                </NextWrapper>
            </PointWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`

const Plant = styled.img`
    position: relative;
    bottom: -20px;
    width: 190px;
`

const DescWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
`

const Hello = styled.p`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    font-size: 18px;
    margin-bottom: 4px;
`

const Nickname = styled.h1`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    margin-bottom: 6px;
    font-size: 25px;
`

const Level = styled.h4`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    color: ${({theme}) => theme.colors.yellowGreenColor};
    font-size: 16px;
`

const BadgeTitle = styled.h3`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    font-size: 20px;
`

const PointBadge = styled.div`
    background-color: ${({theme}) => theme.colors.yellowGreenColor};
    border-radius: 100px;
    margin-top: 5px;
    padding: 1px 7px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PointWrapper = styled.div`
    height: 65px;
    border-radius: 15px;
    width: 100%;
    position: absolute;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    bottom: 0; 
    transform: translateY(50%);
    padding: 0 15px;
    display: flex;
    align-items: center;
`

const BadgeWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 30px;
    height: 30px;
`

const BadgeImg = styled.img`
    position: absolute;
`

const BadgeText = styled.p`
    color: #FFFFFF;
    font-size: 16px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    z-index: 1;
`

const PointText = styled.p`
    color: ${({theme}) => theme.colors.grayColor1};
    margin-left: 10px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    font-size: 18px;
`

const Line = styled.div`
    background-color: ${({theme}) => theme.colors.blackColor};
    opacity: 0.1;
    height: 30px;
    width: 1px;
    margin: 0 5px;
`

const PointAmount = styled.p`
    color: ${({theme}) => theme.colors.grayColor2};
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    font-size: 18px;
`

const NextWrapper = styled.button`
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background-color: #E9E9E9;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
`

const NextImg = styled.img`
    margin-left: 2px;
`