import React from 'react';
import { UserProvider } from './context/UserContext';
import { BrowserRouter } from 'react-router-dom';
import Layout from './containers/layout/Layout';
import Router from './router';
import 'draft-js/dist/Draft.css';
import 'antd/dist/antd.css';

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
