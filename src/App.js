import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import SplashPage from './pages/accountPage/SplashPage';
import LoginPage from './pages/accountPage/LoginPage';
import SignupPage from './pages/accountPage/SignupPage';
import SignupPage2 from './pages/accountPage/SignupPage2';
import MainPage from './pages/mainPage/MainPage';
import AlarmPage from './pages/mainPage/AlarmPage';
import MatchingApplicationPage from './pages/mainPage/MatchingApplicationPage';
import RegistrationListPage from './pages/registrationPage/RegistrationListPage';
import RegistrationCameraPage from './pages/registrationPage/RegistrationCameraPage';
import RegistrationCreatePage from './pages/registrationPage/RegistrationCreatePage';
import RegistrationDetailPage from './pages/registrationPage/RegistrationDetailPage';
import MatchingListPage from './pages/mainPage/MatchingListPage';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<SplashPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/signup' element={<SignupPage />} />
                    <Route path='/signup2' element={<SignupPage2 />} />
                    <Route path='/main' element={<MainPage />} />
                    <Route path='/alarm' element={<AlarmPage />} />
                    <Route path='/matchingapplication' element={<MatchingApplicationPage />} />
                    <Route path='/registration' element={<RegistrationListPage />} />
                    <Route path='/registration/camera' element={<RegistrationCameraPage />} />
                    <Route path='/registration/create' element={<RegistrationCreatePage />} />
                    <Route path='/registration/detail' element={<RegistrationDetailPage />} />
                    <Route path='/matching' element={<MatchingListPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
