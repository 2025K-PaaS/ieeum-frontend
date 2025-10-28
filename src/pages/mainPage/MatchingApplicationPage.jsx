import React, { useState } from 'react';
import * as S from './MatchingApplicationPage.styled';
import { TextHeader } from './../../components/TextHeader';
import { GreenButton } from '../../components/GreenButton';
import { GrayButton } from './../../components/GrayButton';
import { Navbar } from '../../components/Navbar';
import { useLocation } from 'react-router-dom';
import Jeans from '../../assets/images/jeans.png';

const MatchingApplicationPage = () => {
    const { state } = useLocation();
    
    const initialIsButtonShow = state.isButtonShow !== undefined ? state.isButtonShow : false;
    
    const [isButtonShow, setIsButtonShow] = useState(initialIsButtonShow);

    return (
        <>
            <TextHeader text="매칭 신청"/>
            <S.Wrapper>
                <S.Title>오래된 청바지</S.Title>
                {!isButtonShow && (
                    <>
                        <S.ResourceImage src={Jeans}/>
                        <S.SectionDivider />
                    </>
                )}
                <S.Container>
                    <S.SubTitle>상세 페이지</S.SubTitle>
                    <S.DescWrapper>
                        <S.CategoryWarpper>
                            <S.Category>수량 |</S.Category>
                            <S.Value>3</S.Value>
                        </S.CategoryWarpper>
                        <S.Divider />
                        <S.CategoryWarpper>
                            <S.Category>종류 |</S.Category>
                            <S.Value>의류 (하의)</S.Value>
                        </S.CategoryWarpper>
                        <S.Divider />
                        <S.CategoryWarpper>
                            <S.Category>재질 |</S.Category>
                            <S.Value>데님</S.Value>
                        </S.CategoryWarpper>
                        <S.Divider />
                        <S.CategoryWarpper>
                            <S.Category>가치 |</S.Category>
                            <S.Value>2,000 P</S.Value>
                        </S.CategoryWarpper>
                        <S.Divider />
                        <S.CategoryWarpper>
                            <S.Category>설명 |</S.Category>
                            <S.Value>사용감은 있으나 찢어지거나 오염된 곳은 없습니다. 세탁 후 보관 중입니다.사용감은 있으나 찢어지거나 오염된 곳은 없습니다. 세탁 후 보관 중입니다.</S.Value>
                        </S.CategoryWarpper>
                    </S.DescWrapper>
                </S.Container>
                <S.Line />
                <S.MatchingContainer isNavbarShown={!isButtonShow}>
                    <S.Title2>매칭 정보</S.Title2>
                    <S.SubTitle>배송지</S.SubTitle>
                    <S.DescWrapper2>
                        <S.CategoryWarpper>
                            <S.Category>이름 |</S.Category>
                            <S.Value>김지구</S.Value>
                        </S.CategoryWarpper>
                        <S.CategoryWarpper>
                            <S.Category>주소 |</S.Category>
                            <S.Value>서울특별시 마포구 자원순환로 100 (환경동, 에코빌 101호)</S.Value>
                        </S.CategoryWarpper>
                        <S.CategoryWarpper>
                            <S.Category>전화번호 |</S.Category>
                            <S.Value>010-1234-5678</S.Value>
                        </S.CategoryWarpper>
                    </S.DescWrapper2>
                    {isButtonShow && (
                        <S.TwoButtonWrapper>
                            <GrayButton 
                                text="거절"
                                onClick={() => {}}
                                width={130}
                            />
                            <GreenButton 
                                text="수락"
                                onClick={() => {}}
                            />
                        </S.TwoButtonWrapper>
                    )}
                </S.MatchingContainer>
            </S.Wrapper>
            {!isButtonShow && <Navbar />}
        </>
    )
}

export default MatchingApplicationPage
