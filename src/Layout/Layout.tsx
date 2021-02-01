import React, { FunctionComponent, useContext } from 'react';
import { Layout } from 'antd';
import { UserContext } from '../context/UserContext';
import TopHeader from '../components/menu/TopHeader';
import axios from 'axios';

const { Header, Footer, Content } = Layout;

const LayoutHOC: FunctionComponent = ({ children }) => {
    const { loadingUser, user } = useContext(UserContext);

    axios.defaults.baseURL = 'http://localhost:5000/api';
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + user?.token;

    if (loadingUser) {
        return <div />;
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header>
                <TopHeader />
            </Header>
            <Content style={{ background: 'white' }}>{children}</Content>
            <Footer style={{ textAlign: 'center' }}>Stopka</Footer>
        </Layout>
    );
};

export default LayoutHOC;
