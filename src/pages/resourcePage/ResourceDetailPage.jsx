import React, { useState } from 'react';
import * as S from './ResourceDetailPage.styled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { TextHeader } from '../../components/TextHeader';
import { Navbar } from '../../components/Navbar';
import { Bottomsheet } from '../../components/Bottomsheet';
import { GreenButton } from '../../components/GreenButton';
import { GrayButton } from './../../components/GrayButton';
import Jeans from '../../assets/images/jeans.png';
import Plus from '../../assets/icons/plus-gray.svg';
import Minus from '../../assets/icons/minus.svg';

const ResourceDetailPage = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    console.log('state', state);
    const { resource_id } = useParams();
    
    const [isOpen, setIsOpen] = useState(false);
    const [isAutoMatch, setIsAutoMatch] = useState(state.isAutoMatch);
    const [title, setTitle] = useState(state.title);
    const [count, setCount] = useState(state.count);
    const [material, setMaterial] = useState(state.material);
    const [type, setType] = useState(state.type);
    const [value, setValue] = useState(state.value);
    const [description, setDescription] = useState(state.description);
    const [image, setImage] = useState(state.image);
    const [name, setName] = useState(state.name);
    const [address, setAddress] = useState(state.address);
    const [phoneNumber, setPhoneNumber] = useState(state.phoneNumber);
    const [wantedAmount, setWantedAmount] = useState(1);
    const [headerTitle, setHeaderTitle] = useState(state.header_title);
    const [matchedItem, setMatchedItem] = useState(state.matched_items?.length > 0 ? state.matched_items[0] : null);
    console.log('matchedItem', matchedItem);

    const handlePlus = () => {
        if (wantedAmount < count)
        setCount(wantedAmount+1);
    }

    const handleMinus = () => {
        if (wantedAmount > 1) {
            setCount(wantedAmount-1);
        }
    }

    if (!state) {
        return ;
    }

    return (
        <>
            <TextHeader 
                text={headerTitle}
                buttonText={state.value && "매칭하기"} 
                onClick={() => setIsOpen(true)}
            />
            <S.Wrapper>
                <S.Container>
                    <S.Title>{title}</S.Title>
                    {image && (
                        <S.RegistrationImage src={image} alt="자원 이미지"/>
                    )}
                </S.Container>
                <S.Line />
                <S.Container>
                    <S.SubTitle>상세 페이지</S.SubTitle>
                    <S.DescWrapper>
                        <S.CategoryWarpper>
                            <S.Category>수량 |</S.Category>
                            <S.Value>{count}</S.Value>
                        </S.CategoryWarpper>
                        <S.Divider />
                        <S.CategoryWarpper>
                            <S.Category>종류 |</S.Category>
                            <S.Value>{type}</S.Value>
                        </S.CategoryWarpper>
                        <S.Divider />
                        <S.CategoryWarpper>
                            <S.Category>재질 |</S.Category>
                            <S.Value>{material}</S.Value>
                        </S.CategoryWarpper>
                        <S.Divider />
                        {value && (
                            <>
                                <S.CategoryWarpper>
                                    <S.Category>가치 |</S.Category>
                                    <S.Value>{value} P</S.Value>
                                </S.CategoryWarpper>
                                <S.Divider />
                            </>
                        )}
                        <S.CategoryWarpper>
                            <S.Category>설명 |</S.Category>
                            <S.Value>{description}</S.Value>
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
                        <S.CountButtonWrapper onClick={handleMinus} disabled={wantedAmount<=1}>
                            <img src={Minus} alt="빼기 아이콘" />
                        </S.CountButtonWrapper>
                        <S.Count>{count}</S.Count>
                        <S.CountButtonWrapper onClick={handlePlus} disabled={wantedAmount>=count}>
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
            <Bottomsheet 
                isOpen={isAutoMatch}
                onClose={() => setIsAutoMatch(false)}
                overlayColor="rgba(0, 0, 0, 0.8)"
            >
                {matchedItem && (
                <S.BottomSheetWrapper>
                    <S.BottomSheetTitle>매칭 정보</S.BottomSheetTitle>
                    <S.RequestHeader>
                        <S.RequestHeaderLeft>
                            <S.RequestTitle>{matchedItem.title}</S.RequestTitle>
                            <S.RequestHeaderRowWrapper>
                                <S.BottomsheetCategory>종류 |</S.BottomsheetCategory>
                                <S.RequestHeaderValue>{matchedItem.wanted_item}</S.RequestHeaderValue>
                            </S.RequestHeaderRowWrapper>
                            <S.RequestHeaderRowWrapper>
                                <S.BottomsheetCategory>재질 |</S.BottomsheetCategory>
                                <S.RequestHeaderValue>{matchedItem.material_type}</S.RequestHeaderValue>
                            </S.RequestHeaderRowWrapper>
                        </S.RequestHeaderLeft>
                        <S.ResourceImage src={matchedItem.image_url}/>
                    </S.RequestHeader>
                    <S.MatchingSubTitle>상세 페이지</S.MatchingSubTitle>
                    <S.DescWrapper>
                        <S.CategoryWarpper>
                            <S.Category>수량 |</S.Category>
                            <S.Value>{matchedItem.desired_amount}</S.Value>
                        </S.CategoryWarpper>
                        <S.Divider />
                        <S.CategoryWarpper>
                            <S.Category>설명 |</S.Category>
                            <S.Value>{matchedItem.description}</S.Value>
                        </S.CategoryWarpper>
                    </S.DescWrapper>
                    <S.TwoButtonWrapper>
                        <GrayButton 
                            text="거절"
                            onClick={() => setIsAutoMatch(false)}
                            width={130}
                        />
                        <GreenButton 
                            text="수락"
                            onClick={() => navigate('/matchingapplication', {state: { isButtonShow: false }})}
                        />
                    </S.TwoButtonWrapper>
                </S.BottomSheetWrapper>

                )}
            </Bottomsheet>
        </>
    )
}

export default ResourceDetailPage
