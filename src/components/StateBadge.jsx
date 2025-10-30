import React from 'react';
import styled from 'styled-components';

export const NotCompletedBadge = () => {
    return (
        <Wrapper color='#FF8C57'>
            매칭 미 완료
        </Wrapper>
    )
}

export const CompletedBadge = () => {
    return (
        <Wrapper color='#AEDC40'>
            매칭 완료
        </Wrapper>
    )
}

export const ProgressBadge = () => {
    return (
        <Wrapper color='#AEDC40'>
            매칭 신청이 왔어요!
        </Wrapper>
    )
}

export const SendingBadge = () => {
    return (
        <Wrapper color='#AEDC40'>
            매칭 신청을 보냈어요!
        </Wrapper>
    )
}

export const SuccessBadge = () => {
    return (
        <Wrapper color='#0B9454'>
            자원 매칭에 성공했어요
        </Wrapper>
    )
}

export const FailBadge = () => {
    return (
        <Wrapper color='#FF8C57'>
            자원 매칭에 실패했어요
        </Wrapper>
    )
}


const Wrapper = styled.div`
    background-color: ${({color}) => `${color}`};
    height: 23px;
    padding: 0 18px;
    border-radius: 100px;
    color: #FFFFFF;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
`