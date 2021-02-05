import React from 'react';
import { Row, Col, Typography } from 'antd';
import LoginForm from '../../components/forms/LoginForm';

const Login = () => {
    return (
        <Row>
            <Col xs={{ span: 22, offset: 1 }} sm={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 8 }}>
                <Typography.Title level={2}>Logowanie</Typography.Title>
                <LoginForm />
            </Col>
        </Row>
    );
};

export default Login;
