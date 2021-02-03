import { Button, Col, Empty, Row, Space, Typography } from 'antd';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DashboardOfferList from '../../components/dashboad/tables/DashboardOfferList';
import Spinner from '../../components/other/Spinner';
import ProfileData from '../../components/dashboad/profile/ProfileData';
import { UserContext } from '../../context/UserContext';
import { IDashboardOffer } from '../../types/productTypes';
import { IUserDetails } from '../../types/userTypes';
import useQuery from '../../hooks/useQuery';

interface IData {
    offerList: IDashboardOffer[];
}
interface IUser {
    user: IUserDetails;
}

const Dashboard = () => {
    const { user: contextUser } = useContext(UserContext);
    const { data, loading: offersLoading, statusCode } = useQuery({ url: `/offer?userId=${contextUser?.userId}` });
    const { data: userData, loading: userLoading, statusCode: userStatusCode } = useQuery({ url: `/user/current` });
    const { offerList }: IData = data;
    const { user }: IUser = userData;

    if (!user) return <div />;
    return (
        <>
            <Row>
                <Col md={{ span: 16, offset: 4 }}>
                    <ProfileData data={user} />
                    {!user.companyPublicProfile && (
                        <Button type='primary'>
                            <Link to='/dashboard/profilpubliczny'>Dodaj profil publiczny</Link>
                        </Button>
                    )}
                </Col>
            </Row>

            {userLoading ? (
                <Spinner />
            ) : (
                <Row>
                    <Col md={{ span: 16, offset: 4 }}>
                        <Typography.Title level={2}>Profil publiczny</Typography.Title>
                        <Button type='primary'>
                            <Link to='#'>Edytuj profil</Link>
                        </Button>
                    </Col>
                </Row>
            )}

            <Row>
                <Col md={{ span: 16, offset: 4 }}>
                    <Space direction='horizontal' align='baseline'>
                        <Typography.Title level={2}>Moje oferty</Typography.Title>
                        <Button type='primary'>
                            <Link to='/dashboard/dodajoferte'>Dodaj nową ofertę</Link>
                        </Button>
                    </Space>
                    <div>
                        {offersLoading ? (
                            <Spinner />
                        ) : (
                            <>
                                {offerList && offerList?.length === 0 ? (
                                    <Empty description='Brak dodanych ofert' />
                                ) : (
                                    <DashboardOfferList offerList={offerList} />
                                )}
                            </>
                        )}
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Dashboard;
