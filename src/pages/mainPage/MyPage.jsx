import React, { useState } from 'react';
import * as S from './MyPage.styled';
import { useNavigate } from 'react-router-dom';
import { Banner } from '../../components/Banner';
import { Navbar } from './../../components/Navbar';
import { Resource } from './../../components/Resource';
import { resourceData } from './../../constant/resourceData';
import Logo from '../../assets/icons/logo-white.svg';

const MyPage = () => {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('공급자');

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
                    {resourceData.map((resource, index) => (
                        <Resource
                            key={index}
                            name={resource.name}
                            type={resource.type}
                            material={resource.material}
                            image={resource.image}
                            state={resource.state}
                            onClick={() => navigate('/matchingapplication')}
                        />
                    ))}
                </S.ResourceWrapper>
            </S.ActivityWrapper>
            <Navbar />
        </S.Wrapper>
    )
}

export default MyPage
