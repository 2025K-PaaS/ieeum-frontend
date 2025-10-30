import React, { useState, useRef, useEffect } from 'react';
import * as S from './RegistrationCreatePage.styled';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Bottomsheet } from '../../components/Bottomsheet';
import { GreenButton } from '../../components/GreenButton';
import Plus from '../../assets/icons/plus-gray.svg';
import Minus from '../../assets/icons/minus.svg';
import axiosInstance from '../../apis/axiosInstance';

const RegistrationCreatePage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    console.log('image', state.image);
    console.log('image_url', state.image_url);
    console.log('analysis_id', state.analysis_id);
    console.log('item_name', state.item_name);
    console.log('material_type', state.material_type);
    console.log('title_suggested', state.title_suggested);
    console.log('status', state.status);

    const [title, setTitle] = useState(state.title_suggested);
    const [count, setCount] = useState(1);
    const [type, setType] = useState(state.item_name);
    const [material, setMaterial] = useState(state.material_type);
    const [value, setValue] = useState();
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(state.image);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const typeRef = useRef(null);
    const materialRef = useRef(null);
    const valueRef = useRef(null);
    const descriptionRef = useRef(null);

    const handlePlus = () => {
        setCount(count+1);
    }

    const handleMinus = () => {
        if (count > 1) {
            setCount(count-1);
        }
    }

    const handleTextareaHeight = (e) => {
        const event = e?.target || e;
        if (!event) return;
        event.style.height = '0px';
        event.style.height = `${event.scrollHeight}px`;
    }

    const handleSubmit = async () => {
        if (!(state.analysis_id && title && description && count && value && state.material_type)) {
            alert('자원 정보를 모두 입력해주세요');
            console.log('state.analysis_id', state.analysis_id);
            console.log('title', title);
            console.log('description', description);
            console.log('count', count);
            console.log('value', value);
            console.log('state.material_type', state.material_type);
            return ;
        }
        try {
            const response = await axiosInstance.post('/resources', {
                analysis_id: state.analysis_id,
                title,
                description,
                amount: count,
                value,
                material_type: state.material_type,
            });
            console.log('자원 등록 성공', response.data);
            let isAutoMatch = false;
            if (response.data.matched_requests.length > 0) {
                isAutoMatch = true;
            }
            navigate(`/registration/${response.data.resource_id}`, {
                state: {
                    resource_id: response.data.resource_id,
                    title,
                    description,
                    count,
                    value,
                    material: state.material_type,
                    name,
                    address,
                    phoneNumber,
                    isAutoMatch,
                    image,
                    type,
                    matched_items: response.data.matched_requests,
                    username: name,
                    header_title: "자원 등록",
                }
            })
        } catch(error) {
            console.log(error.response);
            alert('자원 등록 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
    }

    const handleMyInfo = async () => {
        try {
            const response = await axiosInstance.get('/auth/me');
            console.log('내 정보 조회', response.data);
            setName(response.data.nickname);
            setPhoneNumber(response.data.phone);
            setAddress(response.data.address);
        } catch(error) {
            console.log('내 정보 조회 실패, error.response');
        }
    }

    useEffect(() => {
        handleMyInfo();
        handleTextareaHeight(typeRef.current);
        handleTextareaHeight(materialRef.current);
        handleTextareaHeight(valueRef.current);
        handleTextareaHeight(descriptionRef.current);
    }, []);

    return (
        <S.Wrapper>
            <S.RegistrationImage src={state.image} alt="자원 이미지" />
            <Bottomsheet isOpen={true} overlayColor="rgba(0, 0, 0, 0.5)">
                <S.BottomSheetWrapper>
                    <S.Title>{title}</S.Title>
                    <S.SubTitle>수량</S.SubTitle>
                    <S.CountWrapper>
                        <S.CountButtonWrapper onClick={handleMinus} disabled={count<=1}>
                            <img src={Minus} alt="빼기 아이콘" />
                        </S.CountButtonWrapper>
                        <S.Count>{count}</S.Count>
                        <S.CountButtonWrapper onClick={handlePlus}>
                            <img src={Plus} alt="더하기 아이콘" />
                        </S.CountButtonWrapper>
                    </S.CountWrapper>
                    <S.SubTitle>상세 페이지</S.SubTitle>
                    <S.DetailWrapper>
                        <S.Detail>
                            <S.Category>종류 |</S.Category>
                            <S.Value
                                ref={typeRef}
                                value={type}
                                onChange={(e) => {
                                    setType(e.target.value)
                                    handleTextareaHeight(e)
                                }}
                                spellCheck={false}
                            />
                        </S.Detail>
                        <S.Detail>
                            <S.Category>재질 |</S.Category>
                            <S.Value
                                ref={materialRef}
                                value={material}
                                onChange={(e) => {
                                    setMaterial(e.target.value)
                                    handleTextareaHeight(e)
                                }}
                                spellCheck={false}
                            />
                        </S.Detail>
                        <S.Detail>
                            <S.Category>가치 |</S.Category>
                            <S.Value
                                ref={valueRef}
                                value={value}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/[^0-9]/g, ''); 
                                    setValue(value);
                                    handleTextareaHeight(e); 
                                }}
                                spellCheck={false}
                            />
                        </S.Detail>
                        <S.Detail>
                            <S.Category>설명 |</S.Category>
                            <S.Value
                                ref={descriptionRef}
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                    handleTextareaHeight(e)
                                }}
                                spellCheck={false}
                            />
                        </S.Detail>
                    </S.DetailWrapper>
                    <S.ButtonWrapper>
                        <GreenButton 
                            text="자원 등록" 
                            onClick={handleSubmit}
                        />
                    </S.ButtonWrapper>
                </S.BottomSheetWrapper>
            </Bottomsheet>
        </S.Wrapper>
    )
}

export default RegistrationCreatePage
