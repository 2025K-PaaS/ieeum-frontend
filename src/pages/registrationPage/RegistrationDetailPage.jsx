import React, { useState } from 'react';
import * as S from './RegistrationDetailPage.styled';
import { TextHeader } from './../../components/TextHeader';
import { Navbar } from './../../components/Navbar';
import { Bottomsheet } from './../../components/Bottomsheet';
import { GreenButton } from './../../components/GreenButton';
import Jeans from '../../assets/images/jeans.png';
import Plus from '../../assets/icons/plus-gray.svg';
import Minus from '../../assets/icons/minus.svg';

const RegistrationDetailPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [count, setCount] = useState(1);
    const [name, setName] = useState('김지구');
    const [address, setAddress] = useState('서울특별시 마포구 자원순환로 100 (환경동, 에코빌 101호)');
    const [phoneNumber, setPhoneNumber] = useState('010-1234-5678');

    const handlePlus = () => {
        setCount(count+1);
    }

    const handleMinus = () => {
        if (count > 1) {
            setCount(count-1);
        }
    }

    return (
        <>
            <TextHeader text="자원 등록" buttonText="매칭하기" onClick={() => setIsOpen(true)}/>
            <S.Wrapper>
                <S.Container>
                    <S.Title>오래된 청바지</S.Title>
                    <S.RegistrationImage src={Jeans} alt="자원 이미지"/>
                </S.Container>
                <S.Line />
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
                            <S.Value>사용감은 있으나 찢어지거나 오염된 곳은 없습니다. 세탁 후 보관 중입니다.사용감은 있으나 찢어지거나 오염된 곳은 없습니다. 세탁 후 보관 중입니다.사용감은 있으나 찢어지거나 오염된 곳은 없습니다. 세탁 후 보관 중입니다.</S.Value>
                        </S.CategoryWarpper>
                    </S.DescWrapper>
                </S.Container>
                {!isOpen && <Navbar />}
            </S.Wrapper>
            <Bottomsheet
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                overlayColor="rgba(0, 0, 0, 0.8)"
            >
                <S.BottomSheetWrapper>
                    <S.BottomSheetTitle>필요 수량</S.BottomSheetTitle>
                    <S.CountWrapper>
                        <S.CountButtonWrapper onClick={handleMinus} disabled={count<=1}>
                            <img src={Minus} alt="빼기 아이콘" />
                        </S.CountButtonWrapper>
                        <S.Count>{count}</S.Count>
                        <S.CountButtonWrapper onClick={handlePlus}>
                            <img src={Plus} alt="더하기 아이콘" />
                        </S.CountButtonWrapper>
                    </S.CountWrapper>
                    <S.Title>배송지</S.Title>
                    <S.DestinationWrapper>
                        <S.CategoryWrapper>
                            <S.BottomsheetCategory>이름 |</S.BottomsheetCategory>
                            <S.BottomsheetValue>{name}</S.BottomsheetValue>
                        </S.CategoryWrapper>
                        <S.CategoryWrapper>
                            <S.BottomsheetCategory>주소 |</S.BottomsheetCategory>
                            <S.BottomsheetValue>{address}</S.BottomsheetValue>
                        </S.CategoryWrapper>
                        <S.CategoryWrapper>
                            <S.BottomsheetCategory>전화번호 |</S.BottomsheetCategory>
                            <S.BottomsheetValue>{phoneNumber}</S.BottomsheetValue>
                        </S.CategoryWrapper>
                    </S.DestinationWrapper>
                    <S.ButtonWrapper>
                        <GreenButton text="매칭 신청" />
                    </S.ButtonWrapper>
                </S.BottomSheetWrapper>
            </Bottomsheet>
        </>
    )
}

export default RegistrationDetailPage
