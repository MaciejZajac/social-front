import { Col, message, Pagination, Row, Spin, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HomeList from '../components/lists/HomeList';
import { IDashboardOffer } from './Dashboard';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [offerList, setOfferList] = useState<IDashboardOffer[]>([]);
    const [totalCount, setTotalCount]: any = useState(0);

    const getAllOffers = async (pageNumber: number = 1, pageSize: number = 5) => {
        try {
            setLoading(true);

            const { offerList, totalCount } = await axios
                .get(`/offer?page=${pageNumber}&limit=${pageSize}`)
                .then((response) => response.data);
            setOfferList(offerList);
            setTotalCount(totalCount);

            setLoading(false);
        } catch (err) {
            setLoading(false);
            message.error('Coś się nie udało');
        }
    };

    useEffect(() => {
        getAllOffers();
    }, []);

    const handlePaginationChange = (pageNumber: number, pageSize?: number) => {
        getAllOffers(pageNumber, pageSize);
    };

    return (
        <Row style={{ marginTop: '2rem' }}>
            <Col xs={{ span: 22, offset: 1 }} md={{ span: 16, offset: 4 }}>
                <Typography.Title level={1}>Lista Ofert</Typography.Title>
                {loading ? <Spin size='large' /> : <HomeList offerList={offerList} />}
                <Pagination pageSize={5} total={totalCount} onChange={handlePaginationChange} />
            </Col>
        </Row>
    );
};

export default Home;
