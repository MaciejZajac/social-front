import { Col, message, Pagination, Row, Spin, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CompanyList from '../components/lists/CompanyList';

export interface ICompanyItem {
    companyName: string;
    shortDescription: string;
    location: string;
    companyUrl: string;
    typeOfCompany: string;
    numberOfOffers: number;
    _id: string;
}

const CompanyProfiles = () => {
    const [loading, setLoading] = useState(true);
    const [companyProfileArr, setCompanyProfileArr] = useState<ICompanyItem[]>([]);
    const [totalCount, setTotalCount]: any = useState(0);

    const getCompanyProfiles = async (pageNumber: number = 1, pageSize: number = 5) => {
        try {
            setLoading(true);

            const { companyProfiles, totalCount } = await axios
                .get(`/companyProfile?page=${pageNumber}&limit=${pageSize}`)
                .then((response) => response.data);

            console.log('companyProfiles', companyProfiles);
            setCompanyProfileArr(companyProfiles);

            setTotalCount(totalCount);

            setLoading(false);
        } catch (err) {
            setLoading(false);
            message.error('Coś się nie udało');
        }
    };

    useEffect(() => {
        getCompanyProfiles();
    }, []);

    const handlePaginationChange = (pageNumber: number, pageSize?: number) => {
        getCompanyProfiles(pageNumber, pageSize);
    };

    return (
        <Row style={{ marginTop: '2rem' }}>
            <Col md={{ span: 16, offset: 4 }}>
                <Typography.Title level={1}>Profile pracodawców</Typography.Title>
                {loading ? <Spin size='large' /> : <CompanyList companyList={companyProfileArr} />}
                <Pagination defaultCurrent={1} pageSize={5} total={totalCount} onChange={handlePaginationChange} />
            </Col>
        </Row>
    );
};

export default CompanyProfiles;
