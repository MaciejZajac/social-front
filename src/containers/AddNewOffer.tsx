import React from 'react';
import { PageHeader, Col, Row } from 'antd';
import NewOfferForm from '../components/forms/NewOfferForm';

const AddNewOffer = () => {
    return (
        <Row style={{ marginTop: '2rem' }}>
            <Col md={{ span: 16, offset: 4 }}>
                <PageHeader onBack={() => window.history.back()} title='Dodaj nową ofertę' />
                <NewOfferForm />
            </Col>
        </Row>
    );
};

export default AddNewOffer;
