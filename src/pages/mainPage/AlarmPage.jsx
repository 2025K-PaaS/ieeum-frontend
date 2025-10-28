import React from 'react';
import * as S from './AlarmPage.styled';
import { TextHeader } from '../../components/TextHeader';
import { Resource } from '../../components/Resource';
import { resourceData } from '../../constant/resourceData';
import { useNavigate } from 'react-router-dom';

const AlarmPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <TextHeader text="알림" />
            <S.ResourceWrapper>
                {resourceData.map((resource, index) => (
                    <Resource
                        key={index}
                        name={resource.name}
                        type={resource.type}
                        material={resource.material}
                        image={resource.image}
                        state={resource.state}
                        onClick={() => navigate('/matchingapplication', {state: { isButtonShow: true }})}
                    />
                ))}
            </S.ResourceWrapper>
        </>
    )
}

export default AlarmPage
