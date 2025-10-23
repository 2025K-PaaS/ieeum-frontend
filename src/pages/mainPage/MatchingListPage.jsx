import React from 'react';
import * as S from '../registrationPage/RegistrationListPage.styled';
import { LogoHeader } from '../../components/LogoHeader';
import { Resource } from '../../components/Resource';
import { Navbar } from '../../components/Navbar';
import { PlusButton } from '../../components/PlusButton';
import { resourceData } from './../../constant/resourceData';

const MatchingListPage = () => {
    return (
        <S.Wrapper>
            <LogoHeader text="자원 요청 리스트" />
                <S.ResourceWrapper>
                    {resourceData.map((resource, index) => (
                        <Resource
                            key={index}
                            name={resource.name}
                            type={resource.type}
                            material={resource.material}
                            image={resource.image}
                            state={resource.state}
                        />
                    ))}
                </S.ResourceWrapper>
                <PlusButton />
                <Navbar />
        </S.Wrapper>
    )
}

export default MatchingListPage
