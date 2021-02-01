import { Col, Row } from 'antd';
import React from 'react';
import CompanyProfileForm from '../components/forms/CompanyProfileForm';

const PublicProfile = () => {
    return (
        <Row style={{ marginTop: '2rem' }}>
            <Col md={{ span: 16, offset: 4 }}>
                <CompanyProfileForm />
            </Col>
        </Row>
    );
};

export default PublicProfile;
