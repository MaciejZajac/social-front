import React, { useEffect, useState } from 'react';
import { Button, Col, message, Row, Spin, Typography } from 'antd';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const AccountActivated = () => {
    const { token }: any = useParams();
    const [error, setError]: any = useState(false);
    const [loading, setLoading] = useState(true);

    const handleAccountActivation = async () => {
        try {
            setLoading(true);
            const { user } = await axios
                .get(`http://localhost:5000/api/user/active/${token}`)
                .then((response) => response.data);

            if (user.active) {
                setLoading(false);
            }
        } catch (err) {
            setError(true);
            setLoading(false);
            message.error('Coś się nie udało');
        }
    };

    useEffect(() => {
        handleAccountActivation();
    }, []);

    const renderView = () => {
        if (loading) return <Spin size='large' />;

        if (error) return <Typography.Title level={2}>Coś poszło nie tak :(</Typography.Title>;

        return (
            <>
                <Typography.Title level={2}>Konto zostało aktywowane</Typography.Title>
                <Link to='/login'>
                    <Button type='primary' size='large'>
                        Przejdź do logowania
                    </Button>
                </Link>
            </>
        );
    };
    return (
        <Row style={{ marginTop: '2rem' }}>
            <Col md={{ span: 8, offset: 8 }}>{renderView()}</Col>
        </Row>
    );
};

export default AccountActivated;
