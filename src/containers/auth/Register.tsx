import React from 'react';
import { Col, Row, Typography } from 'antd';
import RegisterForm from '../../components/forms/RegisterForm';

const Register = () => {
    return (
        <Row>
            <Col xs={{ span: 22, offset: 1 }} sm={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 8 }}>
                <Typography.Title level={2}>Rejestracja</Typography.Title>
                <RegisterForm />
            </Col>
        </Row>
    );
};

export default Register;
