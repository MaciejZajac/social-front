import { Col, Pagination, Row, Typography } from 'antd';
import { useState } from 'react';
import CompanyList from '../../../components/lists/CompanyList';
import Spinner from '../../../components/other/Spinner';
import useQuery from '../../../hooks/useQuery';
import { IUserDetails } from '../../../types/userTypes';

interface IData {
    companyProfiles: IUserDetails[];
    totalCount: number;
}

const CompanyProfiles = () => {
    const [url, setUrl] = useState<string>(`/companyProfile`);
    const { data, loading, statusCode } = useQuery({ url });
    const { companyProfiles, totalCount }: IData = data;

    const handlePaginationChange = (pageNumber: number, pageSize?: number) => {
        setUrl(`/companyProfile?page=${pageNumber}&limit=${pageSize}`);
    };

    return (
        <Row>
            <Col md={{ span: 16, offset: 4 }}>
                <Typography.Title level={1}>Profile pracodawców</Typography.Title>
                {loading ? <Spinner /> : <CompanyList companyList={companyProfiles} />}
                <Pagination defaultCurrent={1} pageSize={5} total={totalCount} onChange={handlePaginationChange} />
            </Col>
        </Row>
    );
};

export default CompanyProfiles;
