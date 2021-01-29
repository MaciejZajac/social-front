import { Col, message, Pagination, Row, Space, Spin, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeList from '../components/lists/HomeList';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [offerList, setOfferList] = useState([]);
    const [totalCount, setTotalCount]: any = useState(0);

    const getAllOffers = async (pageNumber: number = 1, pageSize: number = 5) => {
        try {
            setLoading(true);

            const { offerList, totalCount } = await axios
                .get(`http://localhost:5000/api/offer?page=${pageNumber}&limit=${pageSize}`)
                .then((response) => response.data);
            setOfferList(offerList);
            console.log('totalCount', totalCount);
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
            <Col md={{ span: 16, offset: 4 }}>
                <Typography.Title level={1}>Lista Ofert</Typography.Title>
                {loading ? (
                    <Spin size='large' />
                ) : (
                    <>
                        <HomeList offerList={offerList} />
                    </>
                )}
                <Pagination defaultCurrent={1} pageSize={5} total={totalCount} onChange={handlePaginationChange} />
            </Col>
        </Row>
    );
};

export default Home;
