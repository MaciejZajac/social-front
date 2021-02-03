import React, { useEffect, useState } from 'react';
import { Button, Col, message, Row, Typography } from 'antd';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../components/other/Spinner';
import useQuery from '../../hooks/useQuery';

interface IData {
    user: any;
}

const AccountActivated = () => {
    const { token }: any = useParams();
    const { data, loading, statusCode } = useQuery({ url: `/user/active/${token}` });
    const { user }: IData = data;

    const renderView = () => {
        if (loading) return <Spinner />;
        if (!user) return <Typography.Title level={2}>Coś poszło nie tak</Typography.Title>;

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
        <Row>
            <Col md={{ span: 8, offset: 8 }}>{renderView()}</Col>
        </Row>
    );
};

export default AccountActivated;
