import { Col, Row, Typography } from 'antd';
import React from 'react';

const RegisterConfirm = () => {
    return (
        <Row>
            <Col md={{ span: 8, offset: 8 }}>
                <Typography.Title level={1}>Udało się stworzyć konto</Typography.Title>
                <Typography.Paragraph>Na twój mail został wysłany link aktywacyjny</Typography.Paragraph>
            </Col>
        </Row>
    );
};

export default RegisterConfirm;
