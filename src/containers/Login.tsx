import React from 'react';
import { Row, Col } from 'antd';
import LoginForm from '../components/forms/LoginForm';

const Login = () => {
    return (
        <Row style={{ marginTop: '2rem' }}>
            <Col xs={{ span: 22, offset: 1 }} sm={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 8 }}>
                <LoginForm />
            </Col>
        </Row>
    );
};

export default Login;
