import React, { useRef } from 'react';
import * as S from './RegistrationCameraPage.styled';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import CameraButton from '../../assets/icons/camera-button.svg';
import axiosInstance from './../../apis/axiosInstance';

const RegistrationCameraPage = () => {
    const webcamRef = useRef(null);
    const navigate = useNavigate();

    const dataURLtoBlob = (dataurl) => {
        const parts = dataurl.split(';base64,');
        const contentType = parts[0].split(':')[1];
        const raw = window.atob(parts[1]);
        const rawLength = raw.length;
        const uInt8Array = new Uint8Array(rawLength);
        
        for (let i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }
        return new File([uInt8Array], "captured_image.jpeg", { type: contentType });
    };

    const handleCapture = async () => {
        const image = webcamRef.current.getScreenshot();
        console.log('촬영된 이미지',image);
        if (!image) {
            alert('이미지 촬영에 실패했습니다.');
            return;
        }

        try {
            const imageFile = dataURLtoBlob(image);
            const formData = new FormData();
            formData.append('image', imageFile);
            const response = await axiosInstance.post('/analysis/image', formData);
            console.log('이미지 분석 성공', response.data);
            navigate('/registration/create', { 
                state: { 
                    analysis_id: response.data.analysis_id,
                    item_name: response.data.extracted.item_name,
                    material_type: response.data.extracted.material_type,
                    title_suggested: response.data.extracted.title_suggested,
                    image_url: response.data.image_url,
                    image: image,
                    status: response.data.status,
                }
            })
        } catch (error) {
            console.error('이미지 분석 실패', error);
            alert('이미지 분석을 실패했습니다.');
        }
    }

    return (
        <S.Wrapper>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                    width: 1080,
                    height: 1920,
                    facingMode: 'environment',
                }}
                style={{
                    width: '100%',
                    height: '100vh',
                    objectFit: 'cover',
                }}
            />
            <S.Button onClick={handleCapture}>
                <img src={CameraButton} alt="카메라 버튼 이미지" />
            </S.Button>
        </S.Wrapper>
    )
}

export default RegistrationCameraPage
