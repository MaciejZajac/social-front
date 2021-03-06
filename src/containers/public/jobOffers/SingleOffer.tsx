import { Col, Row } from 'antd';
import { useParams } from 'react-router-dom';
import JobOffer from '../../../components/joboffers/JobOffer';
import Spinner from '../../../components/other/Spinner';
import useQuery from '../../../hooks/useQuery';
import { IDashboardOffer } from '../../../types/productTypes';

interface IData {
    offer: IDashboardOffer;
}

const SingleOffer = () => {
    const params: any = useParams();
    const { data, loading, statusCode } = useQuery({ url: `/offer/${params?.id}` });
    const { offer }: IData = data;

    return (
        <Row style={{ marginTop: '2rem' }}>
            <Col xs={{ span: 22, offset: 1 }} md={{ span: 16, offset: 4 }} xl={{ span: 12, offset: 6 }}>
                {loading ? <Spinner /> : <JobOffer offer={offer} />}
            </Col>
        </Row>
    );
};

export default SingleOffer;
