import React from 'react';
import styled from 'styled-components';
import Home from '../assets/icons/home.svg';
import HomeClicked from '../assets/icons/home-clicked.svg';
import Camera from '../assets/icons/camera.svg';
import CameraClicked from '../assets/icons/camera-clicked.svg';
import List from '../assets/icons/list.svg';
import ListClicked from '../assets/icons/list-clicked.svg';
import Mypage from '../assets/icons/mypage.svg';
import MypageClicked from '../assets/icons/mypage-clicked.svg';
import { useLocation, Link } from 'react-router-dom';

export const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navPages = [
        { path: '/main', text: '홈', icon: Home, iconClicked: HomeClicked },
        { path: '/registration', text: '자원 등록', icon: Camera, iconClicked: CameraClicked }, 
        { path: '/matching', text: '자원 매칭', icon: List, iconClicked: ListClicked }, 
        { path: '/mypage', text: '마이페이지', icon: Mypage, iconClicked: MypageClicked }, 
    ];

    return (
        <Wrapper>
            <PageWrapper>
                {navPages.map((page) => {
                    const isActive = currentPath === page.path;
                    return (
                        <Page to={page.path}>
                            <PageIcon src={isActive ? page.iconClicked : page.icon} alt={`${page.text}아이콘`} />
                            <PageText isActive={isActive}>{page.text}</PageText>
                        </Page>
                    )
                })}
            </PageWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    min-width: 393px;
    max-width: 420px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`

const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 50px;
`

const Page = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    width: 44px;
`

const PageIcon = styled.img`
    height: 21px;
`

const PageText = styled.p`
    font-size: 10px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    color: ${({isActive, theme}) => (isActive ? theme.colors.mainColor : theme.colors.grayColor1)};
`