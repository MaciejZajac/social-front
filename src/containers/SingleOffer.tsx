import { Button, Col, message, PageHeader, Row, Spin, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleOffer = () => {
    const params: any = useParams();
    const [loading, setLoading] = useState(false);
    const [offer, setOffer]: any = useState({});

    const getDetails = async () => {
        try {
            setLoading(true);

            const data = await axios.get(`http://localhost:5000/api/offer/${params?.id}`).then((result) => result.data);
            console.log('data', data);
            setLoading(false);
            setOffer(data.offer);
        } catch (err) {
            setLoading(false);
            console.log('err', err);
            message.error('Coś poszło nie tak');
        }
    };

    useEffect(() => {
        getDetails();
    }, []);

    const handleApply = () => {
        console.log('Apply');
    };

    return (
        <Row style={{ marginTop: '2rem' }}>
            <Col md={{ span: 16, offset: 4 }}>
                {loading ? (
                    <Spin size='large' />
                ) : (
                    <>
                        <PageHeader onBack={() => window.history.back()} title={offer?.title} />
                        <Typography.Title level={3}>{offer.title}</Typography.Title>
                        <Typography.Title level={5}>Opis stanowiska</Typography.Title>

                        <Typography.Paragraph>{offer.description}</Typography.Paragraph>
                        <Button type='primary' onClick={handleApply}>
                            Aplikuj
                        </Button>
                    </>
                )}
            </Col>
        </Row>
    );
};

export default SingleOffer;
