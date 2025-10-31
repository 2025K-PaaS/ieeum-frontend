import React, { useEffect, useState } from 'react';
import * as S from './AlarmPage.styled';
import { TextHeader } from '../../components/TextHeader';
import { Resource } from '../../components/Resource';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './../../apis/axiosInstance';

const AlarmPage = () => {
    const navigate = useNavigate();

    const [matchingData, setMatchingData] = useState([]);

    const handleAlarm = async () => {
        try {
            const response = await axiosInstance.get('/notifications');
            console.log('매칭 조회', response.data);
            setMatchingData(response.data.proposals);
        } catch(error) {
            console.log('매칭 조회 실패', error.response);
        }
    }

    const handlerequestWriter = async (username) => {
        try {
            const response = await axiosInstance.get(`/requests/${username}`);
            console.log('요청 등록자', response.data);
            return {
                address: response.data.address,
                phoneNumber: response.data.phone,
            }
        } catch(error) {
            console.log('요청 등록자 조회 실패', error.response);
            return {
                address: null,
                phoneNumber: null,
            };
        }
    }

    const handleMyInfo = async () => {
        try {
            const response = await axiosInstance.get('/auth/me');
            console.log('내 정보 조회 성공');
            return {
                name: response.data.name || '',
                address: response.data.address || '',
                phoneNumber: response.data.phone || '',
            }
        } catch(error) {
            console.log('내 정보 조회 실패', error.response);
            return { name: '', address: '', phoneNumber: '' };
        }
    }

    const handleResourceInfo = async (resource) => {
        const writerInfo = await handlerequestWriter(resource.request.username);
        let name = resource.request.username;
        let address = writerInfo.address;
        let phoneNumber = writerInfo.phoneNumber;

        if (!address || !phoneNumber) {
            const myInfo = await handleMyInfo();
            if (!name) {
                name = myInfo.name;
            }
            address = address || myInfo.address;
            phoneNumber = phoneNumber || myInfo.phoneNumber;
        }

        const isButtonShow = 
            resource.role==="supplier" && resource.state==="proposed" ? true :
            resource.role==="requester" && resource.state==="proposed" ? false :
            resource.state==="matched" ? false : false;
            
        navigate('/matchingapplication', {
            state: { 
                headerTitle: "매칭 신청",
                isButtonShow,
                title: resource.resource.title,
                count: resource.resource.amount,
                type: resource.resource.item_type,
                material: resource.resource.material_type,
                value: resource.resource.value,
                description: resource.resource.description,
                image: resource.resource.image_url,
                resource_id: resource.resource.resource_id,
                request_id: resource.request.request_id,
                name: name,
                address: address,
                phoneNumber: phoneNumber,
            }
        });
    }

    useEffect(() => {
        handleAlarm();
    }, [])

    return (
        <>
            <TextHeader text="알림" />
            <S.ResourceWrapper>
                {matchingData.map((resource, index) => {
                    console.log('역할', resource.role);

                    if (resource.state === "proposed" || resource.state === "matched") {
                        return(
                            <Resource
                                key={index}
                                name={resource.resource.title}
                                type={resource.resource.item_type}
                                material={resource.resource.material_type}
                                image={resource.resource.image_url}
                                state={resource.state}
                                role={resource.role}
                                onClick={() => handleResourceInfo(resource)}
                            />
                        )
                    }
                    return null;
                })}
            </S.ResourceWrapper>
        </>
    )
}

export default AlarmPage