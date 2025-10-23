import React, { useEffect, useRef, useState } from 'react';
import * as S from './RequestCreatePage.styled';
import { TextHeader } from './../../components/TextHeader';
import { GreenButton } from '../../components/GreenButton';
import { Navbar } from './../../components/Navbar';
import Image from '../../assets/icons/image.svg';

const RequestCreatePage = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [count, setCount] = useState('');
    const [type, setType] = useState('');
    const [material, setMaterial] = useState('');
    const [description, setDescription] = useState('');

    const imageRef = useRef(null)
    const countRef = useRef(null);
    const typeRef = useRef(null);
    const materialRef = useRef(null);
    const descriptionRef = useRef(null);

    const handleImageButton = () => {
        imageRef.current.click();
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    }
    
    const handleTextareaHeight = (e) => {
        const event = e?.target || e;
        if (!event) return;
        event.style.height = '0px';
        event.style.height = `${event.scrollHeight}px`;
    }

    useEffect(() => {
        handleTextareaHeight(countRef.current);
        handleTextareaHeight(typeRef.current);
        handleTextareaHeight(materialRef.current);
        handleTextareaHeight(descriptionRef.current);
    }, []);

    return (
        <S.Wrapper>
            <TextHeader text="자원 요청"/>
            <S.Container>
                <S.Title 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder='제목을 입력해 주세요'
                />
                <S.ImageWrapper>
                    <S.ImageButtonWrapper onClick={handleImageButton}>
                        <S.ImageButtonText>이미지 추가</S.ImageButtonText>
                        <S.ButtonImage src={Image}/> 
                    </S.ImageButtonWrapper>
                    {image && (
                        <S.ImageName>
                            {image.name}
                        </S.ImageName>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        ref={imageRef}
                        onChange={handleImage}
                        style={{ display: 'none' }}
                    />
                </S.ImageWrapper>
            </S.Container>
            <S.Line />
            <S.Container>
            <S.SubTitle>상세 페이지</S.SubTitle>
                <S.DetailWrapper>
                    <S.Detail>
                        <S.Category>수량 |</S.Category>
                        <S.Value
                            ref={countRef}
                            value={count}
                            onChange={(e) => {
                                setCount(e.target.value)
                                handleTextareaHeight(e)
                            }}
                            spellCheck={false}
                        />
                    </S.Detail>
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
                    <GreenButton text="요청 하기"/>
                </S.ButtonWrapper>
            </S.Container>
            <Navbar />
        </S.Wrapper>
    )
}

export default RequestCreatePage
