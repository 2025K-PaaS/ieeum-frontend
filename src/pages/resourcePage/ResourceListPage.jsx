import React, { useEffect, useState } from 'react';
import * as S from './ResourceListPage.styled';
import { LogoHeader } from '../../components/LogoHeader';
import { Resource } from '../../components/Resource';
import { Navbar } from '../../components/Navbar';
import { PlusButton } from '../../components/PlusButton';
import { resourceData } from '../../constant/resourceData';
import { useLocation } from 'react-router-dom';

const ResourceListPage = () => {
    const location = useLocation();
    const [page, setPage] = useState("");

    useEffect(() => {
        const loc = location.pathname;
        if (loc==="/registration") {
            setPage("자원 등록 리스트")
        } else if (loc==="/request") {
            setPage("자원 요청 리스트")
        }
    }, [location])

    return (
        <S.Wrapper>
            <LogoHeader text={page}/>
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

export default ResourceListPage
