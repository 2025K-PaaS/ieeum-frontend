import React from 'react';
import * as S from './MatchingApplicationPage.styled';
import { TextHeader } from './../../components/TextHeader';

const MatchingApplicationPage = () => {
    return (
        <>
            <TextHeader text="매칭 신청"/>
            <S.Wrapper>
                <S.Container>
                    <S.Title>오래된 청바지</S.Title>
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
                            <S.Value>사용감은 있으나 찢어지거나 오염된 곳은 없습니다. 세탁 후 보관 중입니다.</S.Value>
                        </S.CategoryWarpper>
                    </S.DescWrapper>
                </S.Container>
                <S.Line />
                <S.Container>
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
                </S.Container>
            </S.Wrapper>
        </>
    )
}

export default MatchingApplicationPage
