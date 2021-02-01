import { Button, Col, Empty, message, Row, Space, Spin, Typography } from 'antd';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DashboardOfferList from '../components/lists/DashboardOfferList';
import ProfileData from '../components/profile/ProfileData';
import { UserContext } from '../context/UserContext';

export interface IDashboardOffer {
    createdAt: string;
    jobDescription: string;
    jobTitle: string;
    owner: {
        _id: string;
        email: string;
    };
    pensionFrom: number;
    pensionTo: number;
    requiredSkills: string[];
    updatedAt: string;
    _id: string;
}
export interface IUserDetails {
    companyName: string;
    createdAt: string;
    email: string;
    hasCompanyProfile: boolean;
    numberOfOffers: number;
    shortDescription: string;
    linkedin: string;
    companyUrl: string;
    userRole: string;
    location: string;
    companyPublicProfile: string;
    _id: string;
}
const Dashboard = () => {
    const { user } = useContext(UserContext);
    const history = useHistory();

    const [loading, setLoading] = useState(false);
    const [userLoading, setUserLoading] = useState(false);
    const [offerList, setOfferList] = useState<IDashboardOffer[]>([]);
    const [userDetails, setUserDetails] = useState<IUserDetails | undefined>(undefined);

    const getOffers = async () => {
        try {
            setLoading(true);
            const offerList = await axios.get(`/offer?userId=${user?.userId}`).then((result) => result.data?.offerList);
            setLoading(false);

            setOfferList(offerList);
        } catch (err) {
            setLoading(false);

            console.log('err', err);
            message.error('Coś poszło nie tak');
        }
    };

    const getUserDetails = async () => {
        try {
            setUserLoading(true);
            const foundUser = await axios.get(`/user/current`).then((result) => result.data?.user);
            setUserLoading(false);
            if (!foundUser?.companyName) {
                history.replace('/dashboard/completeyourprofile');
            }
            setUserDetails(foundUser);
        } catch (err) {
            setUserLoading(false);
            console.log('err', err);
            message.error('Coś poszło nie tak');
        }
    };

    useEffect(() => {
        getUserDetails();
        getOffers();
    }, []);

    if (!userDetails) return <div />;
    return (
        <>
            <Row style={{ marginTop: '2rem' }}>
                <Col md={{ span: 16, offset: 4 }}>
                    <ProfileData data={userDetails} />
                    {!userDetails.companyPublicProfile && (
                        <Button type='primary'>
                            <Link to='/dashboard/profilpubliczny'>Dodaj profil publiczny</Link>
                        </Button>
                    )}
                </Col>
            </Row>

            {userDetails.companyPublicProfile && (
                <Row style={{ marginTop: '2rem' }}>
                    <Col md={{ span: 16, offset: 4 }}>
                        <Typography.Title level={2}>Profil publiczny</Typography.Title>
                        <Button type='primary'>
                            <Link to='#'>Edytuj profil</Link>
                        </Button>
                    </Col>
                </Row>
            )}

            <Row style={{ marginTop: '2rem' }}>
                <Col md={{ span: 16, offset: 4 }}>
                    <Space direction='horizontal' align='baseline'>
                        <Typography.Title level={2}>Moje oferty</Typography.Title>
                        <Button type='primary'>
                            <Link to='/dashboard/dodajoferte'>Dodaj nową ofertę</Link>
                        </Button>
                    </Space>
                    <div>{loading && <Spin size='large' />}</div>
                    {offerList.length === 0 ? (
                        <Empty description='Brak dodanych ofert' />
                    ) : (
                        <DashboardOfferList offerList={offerList} getOffers={getOffers} />
                    )}
                </Col>
            </Row>
        </>
    );
};

export default Dashboard;
