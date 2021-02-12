import { Col, PageHeader, Row } from 'antd';
import React from 'react';
import CompanyProfileForm from '../../../components/dashboad/forms/CompanyProfileForm';

const PublicProfile = () => {
    return (
        <Row>
            <Col md={{ span: 16, offset: 4 }}>
                <PageHeader onBack={() => window.history.back()} title='Stwórz profil firmy' />
                <CompanyProfileForm />
            </Col>
        </Row>
    );
};

export default PublicProfile;
