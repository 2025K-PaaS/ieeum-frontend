import React, { useCallback, useEffect, useState } from 'react';
import * as S from './MyPage.styled';
import { useNavigate } from 'react-router-dom';
import { Banner } from '../../components/Banner';
import { Navbar } from './../../components/Navbar';
import { Resource } from './../../components/Resource';
import Logo from '../../assets/icons/logo-white.svg';
import axiosInstance from '../../apis/axiosInstance';

const MyPage = () => {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('공급자');
    const [resourceData, setResourceData] = useState([]);

    const handleMyRegistration = useCallback(async () => {
        try {
            const response = await axiosInstance.get('/resources/myresource');
            console.log('등록한 자원', response.data);
            setResourceData(response.data.resources);
        } catch(error) {
            console.log('등록한 자원 가져오기 실패', error.response);
            setResourceData([]);
        }
    }, [])

    const handleMyRequest = useCallback(async () => {
        try {
            const response = await axiosInstance.get('/requests/me');
            console.log('요청한 자원', response.data);
            setResourceData(response.data.requests);
        } catch(error) {
            console.log('요청한 자원 가져오기 실패', error.response);
            setResourceData([]);
        }
    }, [])

    useEffect(() => {
        if (activeTab === '공급자') {
            handleMyRegistration();
        } else if (activeTab === '수요자') {
            handleMyRequest();
        }
    }, [activeTab, handleMyRegistration, handleMyRequest]);

    return (
        <S.Wrapper>
            <S.Banner>
                <S.Header>
                    <S.LogoWrapper>
                        <S.Logo src={Logo} alt="이음 로고 이미지"/>
                        <S.HeaderTitle>이음</S.HeaderTitle>
                    </S.LogoWrapper>
                </S.Header>
                <Banner page="mypage" />
            </S.Banner>
            <S.ActivityWrapper>
                <S.ActivityTitle>활동 내역</S.ActivityTitle>
                <S.TextButtonWrapper>
                    <S.TextButton 
                        isClicked={activeTab==='공급자'}
                        onClick={() => setActiveTab('공급자')}
                    >
                        공급자
                    </S.TextButton>
                    <S.TextButton 
                        isClicked={activeTab==='수요자'}
                        onClick={() => setActiveTab('수요자')}
                    >
                        수요자
                    </S.TextButton>
                </S.TextButtonWrapper>
                <S.ResourceWrapper>
                    {resourceData.map((resource, index) => {
                        const path = activeTab==="공급자"
                            ? `/registration/${resource.resource_id}` 
                            : `/request/${resource.request_id}`;

                        const headerTitle = activeTab==="공급자"
                            ? "자원 등록" 
                            : "자원 요청";

                        return (
                            <Resource
                                key={index}
                                name={resource.title}
                                type={resource.item_type || resource.wanted_item}
                                material={resource.material_type}
                                image={resource.image_url}
                                state={resource.status}
                                onClick={() => navigate(path, {
                                state: {
                                    resource_id: resource.analysis_id || resource.request_id,
                                    title: resource.title,
                                    description: resource.description,
                                    count: resource.amount || resource.desired_amount,
                                    value: resource.value,
                                    material: resource.material_type,
                                    type: resource.item_type || resource.wanted_item,
                                    isAutoMatch: false,
                                    image: resource.image_url,
                                    header_title: headerTitle,
                                    username: resource.username,
                                }
                            })}
                            />
                    )})}
                </S.ResourceWrapper>
            </S.ActivityWrapper>
            <Navbar />
        </S.Wrapper>
    )
}

export default MyPage
