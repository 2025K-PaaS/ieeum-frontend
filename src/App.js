import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import SplashPage from './pages/accountPage/SplashPage';
import LoginPage from './pages/accountPage/LoginPage';
import Main from './pages/mainPage/MainPage';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<SplashPage />} />
                    <Route path='/login' element={<LoginPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
