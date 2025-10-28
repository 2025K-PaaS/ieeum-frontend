import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import SplashPage from './pages/accountPage/SplashPage';
import LoginPage from './pages/accountPage/LoginPage';
import SignupPage from './pages/accountPage/SignupPage';
import SignupPage2 from './pages/accountPage/SignupPage2';
import MainPage from './pages/mainPage/MainPage';
import AlarmPage from './pages/mainPage/AlarmPage';
import MatchingApplicationPage from './pages/mainPage/MatchingApplicationPage';
import ResourceListPage from './pages/resourcePage/ResourceListPage';
import RegistrationCameraPage from './pages/resourcePage/RegistrationCameraPage';
import RegistrationCreatePage from './pages/resourcePage/RegistrationCreatePage';
import ResourceDetailPage from './pages/resourcePage/ResourceDetailPage';
import RequestCreatePage from './pages/resourcePage/RequestCreatePage';
import MyPage from './pages/mainPage/MyPage';
import PointPage from './pages/mainPage/PointPage';
import { AuthProvider, useAuth } from './context/AuthContext';

const AuthWrapper = ({ children }) => {
    const { logout } = useAuth(); 
    
    useEffect(() => {
        window.globalLogout = logout;
        return () => {
            delete window.globalLogout;
        };
    }, [logout]);
    
    return <>{children}</>;
}

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AuthWrapper>
                    <Layout>
                        <Routes>
                            <Route path='/' element={<SplashPage />} />
                            <Route path='/login' element={<LoginPage />} />
                            <Route path='/signup' element={<SignupPage />} />
                            <Route path='/signup2' element={<SignupPage2 />} />
                            <Route path='/main' element={<MainPage />} />
                            <Route path='/alarm' element={<AlarmPage />} />
                            <Route path='/matchingapplication' element={<MatchingApplicationPage />} />
                            <Route path='/registration' element={<ResourceListPage />} />
                            <Route path='/registration/camera' element={<RegistrationCameraPage />} />
                            <Route path='/registration/create' element={<RegistrationCreatePage />} />
                            <Route path='/registration/:resource_id' element={<ResourceDetailPage />} />
                            <Route path='/request' element={<ResourceListPage />} />
                            <Route path='/request/:resource_id' element={<ResourceDetailPage />} />
                            <Route path='/request/create' element={<RequestCreatePage />} />
                            <Route path='/mypage' element={<MyPage />} />
                            <Route path='/point' element={<PointPage />} />
                        </Routes>
                    </Layout>
                </AuthWrapper>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App
