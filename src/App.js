import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import SplashPage from './pages/accountPage/SplashPage';
import LoginPage from './pages/accountPage/LoginPage';
import SignupPage from './pages/accountPage/SignupPage';
import SignupPage2 from './pages/accountPage/SignupPage2';
import MainPage from './pages/mainPage/MainPage';

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
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
