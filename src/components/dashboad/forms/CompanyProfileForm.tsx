import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message, Select, Spin } from 'antd';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import Spinner from '../../other/Spinner';

const CompanyProfileForm = () => {
    const { profileId }: any = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
    const [initialValues, setInitialValues] = useState({});

    useEffect(() => {
        if (profileId) {
            const getFormValues = async () => {
                setLoadingInitial(true);
                try {
                    const { companyProfile } = await axios.get(`/companyProfile/${profileId}`).then((res) => res.data);
                    const { companyDescription, technologiesUsed } = companyProfile;
                    console.log('companyDescription, technologiesUsed', companyDescription, technologiesUsed);
                    setInitialValues({ companyDescription, technologiesUsed });
                    setLoadingInitial(false);
                } catch (err) {
                    message.error('Coś się nie udało');
                    setLoadingInitial(false);
                }
            };

            getFormValues();
        }
    }, []);

    const handleAddNewProfile = async (values: any) => {
        try {
            const { companyDescription, technologiesUsed } = values;
            await axios
                .post(`/companyProfile`, {
                    companyDescription,
                    technologiesUsed,
                })
                .then((response) => response.data);
            setLoading(false);
            message.success('Udało się stworzyć profil');
            history.replace('/dashboard');
        } catch (err) {
            message.error('Coś się nie udało');
            setLoading(false);
        }
    };

    const handleUpdateNewProfile = async (values: any) => {
        try {
            const { companyDescription, technologiesUsed } = values;
            await axios
                .put(`/companyProfile/${profileId}`, {
                    companyDescription,
                    technologiesUsed,
                })
                .then((response) => response.data);
            setLoading(false);
            message.success('Udało się zaktualizować profil');
            history.replace('/dashboard');
        } catch (err) {
            message.error('Coś się nie udało');
            setLoading(false);
        }
    };
    const onFinish = (values: any) => {
        setLoading(true);
        if (profileId) {
            handleUpdateNewProfile(values);
        } else {
            handleAddNewProfile(values);
        }
    };

    if (loadingInitial) return <Spinner />;

    return (
        <Form name='basic' layout='vertical' initialValues={initialValues} onFinish={onFinish}>
            <Form.Item label='Narzędzia wykorzystywane w firmie' name='technologiesUsed' rules={[{ required: true }]}>
                <Select mode='tags' placeholder='React, TypeScript, Scrum...' style={{ width: '100%' }}>
                    <Select.Option key={1} value={'JavaScript'}>
                        {'JavaScript'}
                    </Select.Option>
                    <Select.Option key={2} value={'React'}>
                        {'React'}
                    </Select.Option>
                    <Select.Option key={3} value={'TypeScript'}>
                        {'TypeScript'}
                    </Select.Option>
                    <Select.Option key={4} value={'Node'}>
                        {'Node'}
                    </Select.Option>
                </Select>
            </Form.Item>

            <Form.Item name='companyDescription' label='Opis firmy' rules={[{ required: true }]}>
                <Input.TextArea placeholder='Opis firmy' />
            </Form.Item>

            <Form.Item>
                <Button type='primary' htmlType='submit' loading={loading}>
                    Stwórz profil
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CompanyProfileForm;
