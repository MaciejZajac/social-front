import React, { FunctionComponent, useContext } from 'react';
import { Layout } from 'antd';
import { UserContext } from '../context/UserContext';
import TopHeader from '../components/menu/TopHeader';

const { Header, Footer, Content } = Layout;

const LayoutHOC: FunctionComponent = ({ children }) => {
    const { loadingUser } = useContext(UserContext);

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
