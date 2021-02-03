import { Col, message, Row } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobOffer from '../../../components/joboffers/JobOffer';
import Spinner from '../../../components/other/Spinner';
import useQuery from '../../../hooks/useQuery';

interface IData {
    offer: any;
}

const SingleOffer = () => {
    const params: any = useParams();
    const { data, loading, statusCode } = useQuery({ url: `/offer/${params?.id}` });
    console.log('data', data);
    const { offer }: IData = data;

    return (
        <Row style={{ marginTop: '2rem' }}>
            <Col md={{ span: 16, offset: 4 }}>{loading ? <Spinner /> : <JobOffer offer={offer} />}</Col>
        </Row>
    );
};

export default SingleOffer;
