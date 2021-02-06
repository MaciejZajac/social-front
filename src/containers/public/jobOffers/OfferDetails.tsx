import { Col, PageHeader, Row } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import UpdateOfferForm from '../../../components/dashboad/forms/UpdateOfferForm';
import Spinner from '../../../components/other/Spinner';
import useQuery from '../../../hooks/useQuery';

interface IData {
    offer: any;
}

const OfferDetails = () => {
    const params: any = useParams();
    const { data, loading, statusCode } = useQuery({ url: `/offer/${params?.id}` });
    const { offer }: IData = data;

    return (
        <Row>
            <Col md={{ span: 16, offset: 4 }}>
                <PageHeader onBack={() => window.history.back()} title='Twoja oferta' />

                {loading ? <Spinner /> : <UpdateOfferForm offer={offer} />}
            </Col>
        </Row>
    );
};

export default OfferDetails;
