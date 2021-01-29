import { Button, Col, Empty, message, Row, Space, Spin, Typography } from 'antd';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardOfferList from '../components/lists/DashboardOfferList';
import { UserContext } from '../context/UserContext';

const Dashboard = () => {
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [offerList, setOfferList] = useState([]);

    const getOffers = async () => {
        try {
            setLoading(true);
            const offerList = await axios
                .get(`http://localhost:5000/api/offer?userId=${user?.userId}`)
                .then((result) => result.data?.offerList);
            setLoading(false);

            setOfferList(offerList);
        } catch (err) {
            setLoading(false);

            console.log('err', err);
            message.error('Coś poszło nie tak');
        }
    };

    useEffect(() => {
        getOffers();
    }, []);

    return (
        <>
            <Row style={{ marginTop: '2rem' }}>
                <Col md={{ span: 16, offset: 4 }}>
                    <Typography.Title level={2}>Twoje dane</Typography.Title>
                    Email: {user?.email}
                </Col>
            </Row>

            <Row style={{ marginTop: '2rem' }}>
                <Col md={{ span: 16, offset: 4 }}>
                    <Space direction='horizontal' align='baseline'>
                        <Typography.Title level={2}>Moje oferty</Typography.Title>
                        <Button type='primary'>
                            <Link to='/dashboard/dodajoferte'>Dodaj nową ofertę</Link>
                        </Button>
                    </Space>
                    <div>{loading && <Spin size='large' />}</div>
                    {offerList.length === 0 ? (
                        <Empty description='Brak dodanych ofert' />
                    ) : (
                        <DashboardOfferList offerList={offerList} getOffers={getOffers} />
                    )}
                </Col>
            </Row>
        </>
    );
};

export default Dashboard;
