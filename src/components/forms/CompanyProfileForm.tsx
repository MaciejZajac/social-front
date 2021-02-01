import React, { useState } from 'react';
import { Form, Input, Button, message, Select } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CompanyProfileForm = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: any) => {
        setLoading(true);
        try {
            const { companyDescription, skillsInCompany } = values;
            await axios
                .post(`/companyProfile`, {
                    companyDescription,
                    skillsInCompany,
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

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form name='basic' layout='vertical' onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item label='Narzędzia wykorzystywane w firmie' name='skillsInCompany' rules={[{ required: true }]}>
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
