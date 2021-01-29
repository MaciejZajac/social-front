import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import { UserProvider } from './context/UserContext';
import 'antd/dist/antd.css';
import Router from './router';

const App = () => {
    return (
        <BrowserRouter>
            <UserProvider>
                <Layout>
                    <Router />
                </Layout>
            </UserProvider>
        </BrowserRouter>
    );
};

export default App;
