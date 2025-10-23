import React, { useState, useRef } from 'react';
import styled from 'styled-components';

export const Bottomsheet = ({ children, height='' }) => {
    const [translateY, setTranslateY] = useState(0);
    const startY = useRef(0);
    const currentY = useRef(0);
    const sheetHeight = useRef(window.innerHeight * 0.4);

    const handleMouseDown = (e) => {
        startY.current = e.clientY;
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        const diff = e.clientY - startY.current;
        const percent = Math.min(Math.max((diff / sheetHeight.current) * 100, 0), 100);
        currentY.current = percent;
        setTranslateY(percent);
    };

    const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);

        if (currentY.current > 30) {
            setTranslateY(90);
        } else {
            setTranslateY(0);
        }
    };

    return (
        <>
            <Overlay isOpen={translateY < 80} onClick={() => setTranslateY(90)} />
            <Sheet 
                height={height}
                style={{ transform: `translate(-50%, ${translateY}%)` }}
            >
                <Handle onMouseDown={handleMouseDown} />
                <Content isVisible={translateY < 80}>
                    {children}
                </Content>
            </Sheet>
        </>
    )
}

const Overlay = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const Sheet = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    height: ${({ height }) => height};
    background: white;
    border-radius: 15px 15px 0 0;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-out;
    will-change: transform;
    min-width: 393px;
    max-width: 420px;
    width: 100%;
    transform: translateX(-50%);
`

const Handle = styled.div`
    width: 140px;
    height: 5px;
    background-color: #E6E6E6;
    border-radius: 100px;
    margin: 23px auto;
    cursor: grab;
`

const Content = styled.div`
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
    transition: opacity 0.2s ease-out;
`