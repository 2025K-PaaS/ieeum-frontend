import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
    return (
        <Wrapper>{ children }</Wrapper>
    )
}

export default Layout;

const Wrapper = styled.div`
    position: relative;
    margin: 0 auto;
    /* padding: 0 20px; */
    height: 100vh;
    /* overflow-y: auto; */
    min-width: 393px;
    max-width: 420px;
    background-color: ${({theme}) => theme.colors.backColor};
    /* border: 1px solid black; */
`