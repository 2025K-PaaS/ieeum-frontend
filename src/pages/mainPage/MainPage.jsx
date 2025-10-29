import React, { useEffect, useState } from 'react';
import * as S from "./MainPage.styeld";
import Logo from '../../assets/icons/logo-white.svg';
import Alarm from '../../assets/icons/alarm.svg';
import { Banner } from '../../components/Banner';
import { RegistrationButton } from '../../components/RegistrationButton';
import { Navbar } from '../../components/Navbar';
import { Resource } from '../../components/Resource';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../apis/axiosInstance';

const MainPage = () => {
    const navigate = useNavigate();
    const [resources, setResources] = useState([]);

    const handleResource = async () => {
        try {
            const response = await axiosInstance.get('/resources/all');
            console.log('자원 목록', response.data);
            setResources(response.data.resources);
        } catch(error) {
            console.log('자원 목록 가져오기 실패', error.response);
        }
    }

    useEffect(() => {
        handleResource();
    }, [])

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
                <Banner page="home" />
            </S.Banner>
            <RegistrationButton />
            <S.Line />
            <S.ResourceRegisterTitle>자원 등록 리스트</S.ResourceRegisterTitle>
            {resources.map((resource, index) => (
                <Resource
                    key={index}
                    name={resource.title}
                    type={resource.item_name}
                    material={resource.material_type}
                    image={resource.image_url}
                    state={resource.status}
                    onClick={() => navigate(`/registration/${resource.resource_id}`, {
                        state: {
                            analysis_id: resource.analysis_id,
                            title: resource.title,
                            description: resource.description,
                            count: resource.amount,
                            value: resource.value,
                            material: resource.material_type,
                            type: resource.item_name,
                            isAutoMatch: false,
                            image: resource.image_url,
                            username: resource.username,
                        }
                    })}
                />
            ))}
            <Navbar />
        </S.Wrapper>
    )
}

export default MainPage
