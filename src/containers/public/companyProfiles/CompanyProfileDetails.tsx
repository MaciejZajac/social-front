import { Col, Row } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../../components/other/Spinner';
import UserInfo from '../../../components/dashboad/userInfo/UserInfo';
import useQuery from '../../../hooks/useQuery';

interface IData {
    companyProfile: any;
}

const CompanyProfileDetails = () => {
    const { profileId }: any = useParams();
    const [url, setUrl] = useState<string>(`/companyProfile/${profileId}`);
    const { data, loading, statusCode } = useQuery({ url });
    const { companyProfile }: IData = data;

    return (
        <Row>
            <Col md={{ span: 16, offset: 4 }}>{loading ? <Spinner /> : <UserInfo profile={companyProfile} />}</Col>
        </Row>
    );
};

export default CompanyProfileDetails;
