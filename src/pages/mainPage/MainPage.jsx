import React, { useState } from 'react';
import * as S from "./MainPage.styeld";
import Logo from '../../assets/icons/logo-white.svg';
import Alarm from '../../assets/icons/alarm.svg';
import { Banner } from '../../components/Banner';
import { RegistrationButton } from '../../components/RegistrationButton';
import { Navbar } from '../../components/Navbar';
import { Resource } from '../../components/Resource';
import { resourceData } from './../../constant/resourceData';
import { useLocation, useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <S.Wrapper>
            <S.Banner>
                <S.Header>
                    <S.LogoWrapper>
                        <S.Logo src={Logo} alt="이음 로고 이미지"/>
                        <S.HeaderTitle>이음</S.HeaderTitle>
                    </S.LogoWrapper>
                    <S.AlarmWrapper onClick={() => navigate('/alarm')}>
                        <S.Alarm src={Alarm} alt="알림 아이콘" />
                    </S.AlarmWrapper>
                </S.Header>
                <Banner  page="home" />
            </S.Banner>
            <RegistrationButton />
            <S.Line />
            <S.ResourceRegisterTitle>자원 등록 리스트</S.ResourceRegisterTitle>
            {resourceData.map((resource, index) => (
                <Resource
                    key={index}
                    name={resource.name}
                    type={resource.type}
                    material={resource.material}
                    image={resource.image}
                    state={resource.state}
                    onClick={() => navigate('/resource/detail', {state: true})}
                />
            ))}
            <Navbar />
        </S.Wrapper>
    )
}

export default MainPage
