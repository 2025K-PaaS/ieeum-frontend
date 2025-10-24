import React, { useState, useRef, useEffect } from 'react';
import * as S from './RegistrationCreatePage.styled';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Bottomsheet } from '../../components/Bottomsheet';
import { GreenButton } from '../../components/GreenButton';
import Plus from '../../assets/icons/plus-gray.svg';
import Minus from '../../assets/icons/minus.svg';

const RegistrationCreatePage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const [count, setCount] = useState(1);
    const [type, setType] = useState('의류 (하의)');
    const [material, setMaterial] = useState('데님');
    const [value, setValue] = useState('2,000 P');
    const [description, setDescription] = useState('');

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

    useEffect(() => {
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
                    <S.Title>오래된 청바지</S.Title>
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
                                    setValue(e.target.value)
                                    handleTextareaHeight(e)
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
                            onClick={() => navigate('/resource/detail', {state: true})}
                        />
                    </S.ButtonWrapper>
                </S.BottomSheetWrapper>
            </Bottomsheet>
        </S.Wrapper>
    )
}

export default RegistrationCreatePage
