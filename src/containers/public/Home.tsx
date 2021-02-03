import { Col, Pagination, Row, Typography } from 'antd';
import { useState } from 'react';
import JobOfferList from '../../components/joboffers/JobOfferList';
import Spinner from '../../components/other/Spinner';
import useQuery from '../../hooks/useQuery';
import { IDashboardOffer } from '../../types/productTypes';

interface IData {
    offerList: IDashboardOffer[];
    totalCount: number;
}
const Home = () => {
    const [url, setUrl] = useState<string>(`/offer?page=1&limit=5`);
    const { data, loading, statusCode } = useQuery({ url });
    const { offerList, totalCount }: IData = data;

    const handlePaginationChange = (pageNumber: number, pageSize?: number): void => {
        setUrl(`/offer?page=${pageNumber}&limit=${pageSize}`);
    };

    return (
        <Row>
            <Col xs={{ span: 22, offset: 1 }} md={{ span: 16, offset: 4 }}>
                <Typography.Title level={1}>Lista Ofert</Typography.Title>
                {loading ? <Spinner /> : <JobOfferList offerList={offerList} />}
                <Pagination
                    style={{ display: 'flex', justifyContent: 'center' }}
                    pageSize={5}
                    total={totalCount}
                    onChange={handlePaginationChange}
                />
            </Col>
        </Row>
    );
};

export default Home;
