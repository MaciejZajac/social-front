import { Button, Col, Empty, Row, Space, Typography } from 'antd';
import { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DashboardOfferTable from '../../components/dashboad/tables/DashboardOfferTable';
import Spinner from '../../components/other/Spinner';
import ProfileData from '../../components/dashboad/profile/ProfileData';
import { UserContext } from '../../context/UserContext';
import { IDashboardOffer } from '../../types/productTypes';
import { IUserDetails } from '../../types/userTypes';
import useQuery from '../../hooks/useQuery';
import { createQueryString } from '../../hooks/createQueryString';
import CompanyProfileDetailed from '../../components/dashboad/profile/CompanyProfileDetailed';

interface IData {
    offerList: IDashboardOffer[];
}
interface IUser {
    user: IUserDetails;
}

const Dashboard = () => {
    const history = useHistory();
    const queryString = createQueryString({ page: 1, limit: 10 });
    const { user: contextUser } = useContext(UserContext);
    const { data, loading: offersLoading, statusCode } = useQuery({
        url: `/offer?userId=${contextUser?.userId}&${queryString}`,
    });
    const { data: userData, loading: userLoading, statusCode: userStatusCode } = useQuery({ url: `/user/current` });
    const { offerList }: IData = data;
    const { user }: IUser = userData;
    useEffect(() => {
        if (!contextUser?.location) {
            history.push('/dashboard/completeyourprofile');
        }
    }, [contextUser]);

    if (!contextUser) return <div />;

    return (
        <>
            <Row style={{ margin: '20px 0' }}>
                <Col sm={{ span: 24, offset: 0 }} md={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 2 }}>
                    <ProfileData data={user} />
                </Col>
            </Row>

            {/* {userLoading ? (
                <Spinner />
            ) : (
                <Row style={{ margin: '20px 0' }}>
                    <Col md={{ span: 16, offset: 4 }}>
                        <Typography.Title level={2}>Profil publiczny</Typography.Title>
                        <Button type='primary'>
                            <Link to='#'>Edytuj profil</Link>
                        </Button>
                    </Col>
                </Row>
            )} */}

            <Row style={{ margin: '40px 0' }}>
                <Col sm={{ span: 24, offset: 0 }} md={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 2 }}>
                    <Space direction='horizontal' align='baseline'>
                        <Typography.Title level={2}>Profil publiczny</Typography.Title>
                        {!user?.companyPublicProfile ? (
                            <Button type='primary'>
                                <Link to='/dashboard/profilpubliczny'>Dodaj profil publiczny</Link>
                            </Button>
                        ) : (
                            <Button type='default'>
                                <Link to={`/dashboard/profilpubliczny/${user?.companyPublicProfile}`}>
                                    Zaktualizuj profil
                                </Link>
                            </Button>
                        )}
                    </Space>
                    {!user?.companyPublicProfile ? (
                        <div>brak profilu</div>
                    ) : (
                        <CompanyProfileDetailed profileId={user?.companyPublicProfile} />
                    )}
                </Col>
            </Row>

            <Row style={{ margin: '40px 0' }}>
                <Col sm={{ span: 24, offset: 0 }} md={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 2 }}>
                    <Space direction='horizontal' align='baseline'>
                        <Typography.Title level={2}>Moje oferty</Typography.Title>
                        <Button type='default'>
                            <Link to='/dashboard/dodajoferte'>Dodaj nową ofertę</Link>
                        </Button>
                    </Space>
                    <div>
                        {offersLoading ? (
                            <Spinner />
                        ) : (
                            <>
                                {offerList?.length === 0 ? (
                                    <Empty description='Brak dodanych ofert' />
                                ) : (
                                    <DashboardOfferTable offerList={offerList} />
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
