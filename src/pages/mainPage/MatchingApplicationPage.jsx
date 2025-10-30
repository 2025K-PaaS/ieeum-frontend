import React, { useState } from 'react';
import * as S from './MatchingApplicationPage.styled';
import { TextHeader } from './../../components/TextHeader';
import { GreenButton } from '../../components/GreenButton';
import { GrayButton } from './../../components/GrayButton';
import { Navbar } from '../../components/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../../apis/axiosInstance';

const MatchingApplicationPage = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    console.log('state', state);
    
    const initialIsButtonShow = state.isButtonShow !== undefined ? state.isButtonShow : false;
    
    const [isButtonShow, setIsButtonShow] = useState(initialIsButtonShow);
    const [headerTitle, setHeaderTitle] = useState(state.headerTitle);
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

    console.log('resource_id', state.resource_id);
    console.log('request_id', state.request_id);
    console.log('종류', state.type, "설명", state.description)

    const handleAccept = async () => {
        console.log('수락');

        try {
            const response = await axiosInstance.post('/notifications/confirm', {
                resource_id: state.resource_id,
                request_id: state.request_id,
                action: "accept"
            })
            console.log('매칭 수락 성공', response.data);
        } catch(error) {
            console.log('매칭 수락 실패', error.response);
        } finally {
            navigate(-1);
        }
    }

    const handleReject = async () => {
        console.log('거절');

        try {
            const response = await axiosInstance.post('/notifications/confirm', {
                resource_id: state.resource_id,
                request_id: state.request_id,
                action: "reject"
            })
            console.log('자동 매칭 거절 성공', response.data);
        } catch(error) {
            console.log('자동 매칭 거절 실패', error.response);
        } finally {
            navigate(-1);
        }
    }

    return (
        <>
            <TextHeader text={headerTitle} />
            <S.Wrapper>
                <S.Title>{title}</S.Title>
                {headerTitle!=="매칭 신청" && !isButtonShow && (
                    <>
                        <S.ResourceImage src={image}/>
                        <S.SectionDivider />
                    </>
                )}
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
                        <S.CategoryWarpper>
                            <S.Category>가치 |</S.Category>
                            <S.Value>{value} P</S.Value>
                        </S.CategoryWarpper>
                        <S.Divider />
                        <S.CategoryWarpper>
                            <S.Category>설명 |</S.Category>
                            <S.Value>{description}</S.Value>
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
                            <S.Value>{name}</S.Value>
                        </S.CategoryWarpper>
                        <S.CategoryWarpper>
                            <S.Category>주소 |</S.Category>
                            <S.Value>{address}</S.Value>
                        </S.CategoryWarpper>
                        <S.CategoryWarpper>
                            <S.Category>전화번호 |</S.Category>
                            <S.Value>{phoneNumber}</S.Value>
                        </S.CategoryWarpper>
                    </S.DescWrapper2>
                    {isButtonShow && (
                        <S.TwoButtonWrapper>
                            <GrayButton 
                                text="거절"
                                onClick={handleReject}
                                width={130}
                            />
                            <GreenButton 
                                text="수락"
                                onClick={handleAccept}
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
