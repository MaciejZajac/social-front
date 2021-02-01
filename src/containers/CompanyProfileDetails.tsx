import { Col, message, PageHeader, Row, Space, Spin, Tag, Typography } from 'antd';
import Item from 'antd/lib/list/Item';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FacebookFilled, LinkedinFilled } from '@ant-design/icons';

const CompanyProfileDetails = () => {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile]: any = useState({});
    const { profileId }: any = useParams();
    const getCompanyProfile = async () => {
        try {
            setLoading(true);
            const { companyProfile } = await axios
                .get(`/companyProfile/${profileId}`)
                .then((response) => response.data);
            setProfile(companyProfile);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            message.error('Coś się nie udało');
        }
    };

    useEffect(() => {
        getCompanyProfile();
    }, []);

    return (
        <Row style={{ marginTop: '2rem' }}>
            <Col md={{ span: 16, offset: 4 }}>
                {loading ? (
                    <Spin size='large' />
                ) : (
                    <>
                        <PageHeader onBack={() => window.history.back()} title='Profil firmy' />
                        <Typography.Title level={4}>{profile.companyName}</Typography.Title>
                        <Typography.Paragraph>{profile.companyDescription}</Typography.Paragraph>
                        <Typography.Text type='secondary'>{profile.createdAt}</Typography.Text>
                        <br />
                        <br />

                        <Typography.Title level={5}>Używane technologie</Typography.Title>
                        {profile.technologiesUsed?.map((item: any) => (
                            <Tag key={item}>{item}</Tag>
                        ))}
                        <br />
                        <br />
                        <Space size={10}>
                            {profile.socialMedia?.linkedIn && (
                                <a href='#'>
                                    <FacebookFilled style={{ fontSize: '40px' }} />
                                </a>
                            )}
                            {profile.socialMedia?.facebook && (
                                <a href='#'>
                                    <LinkedinFilled style={{ fontSize: '40px' }} />
                                </a>
                            )}
                        </Space>
                    </>
                )}
            </Col>
        </Row>
    );
};

export default CompanyProfileDetails;
