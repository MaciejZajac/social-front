import React from 'react';
import { Row, Col } from 'antd';
import LoginForm from '../components/forms/LoginForm';

const Login = () => {
    return (
        <Row style={{ marginTop: '2rem' }}>
            <Col md={{ span: 8, offset: 8 }}>
                <LoginForm />
            </Col>
        </Row>
    );
};

export default Login;
