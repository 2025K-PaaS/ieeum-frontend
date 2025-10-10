import React, { useRef } from 'react';
import * as S from './RegistrationCameraPage.styled';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import CameraButton from '../../assets/icons/camera-button.svg';

const RegistrationCameraPage = () => {
    const webcamRef = useRef(null);
    const navigate = useNavigate();

    const handleCapture = () => {
        const image = webcamRef.current.getScreenshot();
        if (image) {
            navigate('/registration/create', { state: { image } });
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
