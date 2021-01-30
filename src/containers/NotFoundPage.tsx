import { Col, Row } from 'antd';
import React from 'react';

const NotFoundPage = () => {
    return (
        <Row style={{ marginTop: '2rem' }}>
            <Col md={{ span: 16, offset: 4 }}>404 Nie ma takiej strony :(</Col>
        </Row>
    );
};

export default NotFoundPage;
