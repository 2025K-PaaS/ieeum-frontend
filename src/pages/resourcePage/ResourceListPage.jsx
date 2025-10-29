import React, { useEffect, useState } from 'react';
import * as S from './ResourceListPage.styled';
import { LogoHeader } from '../../components/LogoHeader';
import { Resource } from '../../components/Resource';
import { Navbar } from '../../components/Navbar';
import { PlusButton } from '../../components/PlusButton';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../../apis/axiosInstance';

const ResourceListPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [page, setPage] = useState("");
    const [resources, setResources] = useState([]);
    const [headerTitle, setHeaderTitle] = useState('');

    useEffect(() => {
        const loc = location.pathname;
        if (loc==="/registration") {
            setPage("자원 등록 리스트");
            handleRegistration();
            setHeaderTitle("자원 등록");
        } else if (loc==="/request") {
            setPage("자원 요청 리스트");
            handleRequest();
            setHeaderTitle("자원 요청");
        }
    }, [location])

    
    const handleRegistration = async () => {
        try {
            const response = await axiosInstance.get('/resources/all');
            console.log('자원 목록', response.data);
            setResources(response.data.resources);
        } catch(error) {
            console.log('등록된 자원 목록 가져오기 실패', error.response);
        }
    }

    
    const handleRequest = async () => {
        try {
            const response = await axiosInstance.get('/requests/all');
            console.log('자원 목록', response.data);
            setResources(response.data.requests);
        } catch(error) {
            console.log('요청된 자원 목록 가져오기 실패', error.response);
        }
    }

    return (
        <S.Wrapper>
            <LogoHeader text={page}/>
            <S.ResourceWrapper>
                {resources.map((resource, index) => {
                    const path = page==="자원 등록 리스트"
                        ? `/registration/${resource.resource_id}` 
                        : `/request/${resource.request_id}`;
                    return (
                        <Resource
                            key={index}
                            name={resource.title}
                            type={resource.item_type || resource.wanted_item}
                            material={resource.material_type}
                            image={resource.image_url}
                            state={resource.status}
                            onClick={() => navigate(path, {
                                state: {
                                    resource_id: resource.analysis_id || resource.resource_id || resource.request_id,
                                    title: resource.title,
                                    description: resource.description,
                                    count: resource.amount || resource.desired_amount,
                                    value: resource.value,
                                    material: resource.material_type,
                                    type: resource.item_name || resource.wanted_item,
                                    isAutoMatch: false,
                                    image: resource.image_url,
                                    header_title: headerTitle,
                                    username: resource.username,
                                }
                            })}
                        />
                    )
                })}
            </S.ResourceWrapper>
            <PlusButton />
            <Navbar />
        </S.Wrapper>
    )
}

export default ResourceListPage
