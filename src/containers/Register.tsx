import React from 'react';
import { Col, Row, Typography } from 'antd';
import RegisterForm from '../components/forms/RegisterForm';

const Register = () => {
    return (
        <Row style={{ marginTop: '2rem' }}>
            <Col md={{ span: 8, offset: 8 }}>
                <Typography.Title level={2}>Rejestracja</Typography.Title>
                <RegisterForm />
            </Col>
        </Row>
    );
};

export default Register;
