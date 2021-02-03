import React from 'react';
import { PageHeader, Col, Row } from 'antd';
import NewOfferForm from '../../components/dashboad/forms/NewOfferForm';

const AddNewOffer = () => {
    return (
        <Row>
            <Col md={{ span: 16, offset: 4 }}>
                <PageHeader onBack={() => window.history.back()} title='Dodaj nową ofertę' />
                <NewOfferForm />
            </Col>
        </Row>
    );
};

export default AddNewOffer;
