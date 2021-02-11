import React from 'react';
import { PageHeader, Col, Row } from 'antd';
import NewOfferForm from '../../components/dashboad/forms/NewOfferForm';

const AddNewOffer = () => {
    return (
        <Row>
            <Col xs={{ span: 22, offset: 1 }} md={{ span: 16, offset: 4 }} lg={{ span: 12, offset: 6 }}>
                <PageHeader onBack={() => window.history.back()} title='Dodaj nową ofertę' />
                <Row>
                    <Col md={{ span: 14, offset: 0 }}>
                        <NewOfferForm />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default AddNewOffer;
