import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        localStorage.removeItem('accessToken');
        setIsAuthenticated(false);
        
        if (!['/', '/login', '/signup', '/signup2'].includes(location.pathname)) {
            alert('인증 정보가 만료되었거나 유효하지 않아 로그아웃되었습니다.');
        }
        
        navigate('/login');
    };

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    const value = {
        isAuthenticated,
        setIsAuthenticated,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};