import { Button, Col, Empty, message, Row, Space, Spin, Typography } from 'antd';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DashboardOfferList from '../components/lists/DashboardOfferList';
import { UserContext } from '../context/UserContext';

interface IUserDetails {
    companyName: string;
    createdAt: string;
    email: string;
    hasCompanyProfile: boolean;
    linkedin: string;
    numberOfOffers: number;
    shortDescription: string;
    userRole: string;
    _id: string;
}
const Dashboard = () => {
    const { user } = useContext(UserContext);
    const history = useHistory();
    if (!user?.companyName) {
        history.replace('/dashboard/completeyourprofile');
    }

    const [loading, setLoading] = useState(false);
    const [offerList, setOfferList] = useState([]);
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
            const foundUser = await axios.get(`/user/current`).then((result) => result.data?.user);

            setUserDetails(foundUser);
        } catch (err) {
            console.log('err', err);
            message.error('Coś poszło nie tak');
        }
    };

    useEffect(() => {
        getUserDetails();
        getOffers();
    }, []);

    return (
        <>
            <Row style={{ marginTop: '2rem' }}>
                <Col md={{ span: 16, offset: 4 }}>
                    <Typography.Title level={2}>Twoje dane</Typography.Title>
                    {console.log('userDetails', userDetails)}
                    Email: <strong>{userDetails?.email}</strong>
                    <br />
                    Nazwa firmy: <strong>{userDetails?.companyName}</strong>
                    <br />
                    Krótki opis: <strong>{userDetails?.shortDescription}</strong>
                    <br />
                    Liczba ofert: <strong>{userDetails?.numberOfOffers}</strong>
                    <br />
                    Publiczny profil firmy: <strong>{userDetails?.hasCompanyProfile ? 'Tak' : 'Nie'}</strong>
                    <br />
                    Konto utworzono: <strong>{userDetails?.createdAt}</strong>
                    <br />
                </Col>
            </Row>

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
