import { Col, message, PageHeader, Row, Spin } from 'antd';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UpdateOfferForm from '../components/forms/UpdateOfferForm';
import { UserContext } from '../context/UserContext';

const OfferDetails = () => {
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [offer, setOffer]: any = useState({});
    const params: any = useParams();

    const getOffer = async () => {
        try {
            setLoading(true);
            const data = await axios
                .get(`http://localhost:5000/api/offer/${params?.id}`, {
                    headers: {
                        Authorization: 'Bearer ' + user?.token,
                    },
                })
                .then((result) => result.data);
            console.log('data', data);
            setOffer(data.offer);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log('err', err);
            message.error('Coś poszło nie tak');
        }
    };

    useEffect(() => {
        getOffer();
    }, []);

    return (
        <Row style={{ marginTop: '2rem' }}>
            <Col md={{ span: 16, offset: 4 }}>
                <PageHeader onBack={() => window.history.back()} title='Twoja oferta' />

                {loading ? <Spin size='large' /> : <UpdateOfferForm offer={offer} />}
            </Col>
        </Row>
    );
};

export default OfferDetails;
