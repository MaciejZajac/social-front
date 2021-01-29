import { Col, message, Pagination, Row, Spin, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CompanyList from '../components/lists/CompanyList';

const CompanyProfiles = () => {
    const [loading, setLoading] = useState(true);
    const [companyProfileArr, setCompanyProfileArr] = useState([]);
    const [totalCount, setTotalCount]: any = useState(0);

    const getCompanyProfiles = async (pageNumber: number = 1, pageSize: number = 5) => {
        try {
            setLoading(true);

            const { userList, totalCount } = await axios
                .get(`http://localhost:5000/api/user?page=${pageNumber}&limit=${pageSize}`)
                .then((response) => response.data);
            setCompanyProfileArr(userList);

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
                <Typography.Title level={1}>Lista Ofert</Typography.Title>
                {loading ? <Spin size='large' /> : <CompanyList companyList={companyProfileArr} />}
                <Pagination defaultCurrent={1} pageSize={5} total={totalCount} onChange={handlePaginationChange} />
            </Col>
        </Row>
    );
};

export default CompanyProfiles;
