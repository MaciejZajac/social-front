import React, { FunctionComponent, useContext } from 'react';
import { Layout } from 'antd';
import { UserContext } from '../../context/UserContext';
import TopHeader from '../../components/layout/TopHeader';
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
        <Layout style={{ height: '100vh', background: 'none', display: 'flex', flexDirection: 'column' }}>
            <Header style={{ background: 'none' }}>
                <TopHeader />
            </Header>
            <Content style={{ background: 'white', padding: '2rem 0', flexGrow: 1 }}>{children}</Content>
            {/* <Footer style={{ textAlign: 'center', background: 'none' }}>Stopka</Footer> */}
        </Layout>
    );
};

export default LayoutHOC;
