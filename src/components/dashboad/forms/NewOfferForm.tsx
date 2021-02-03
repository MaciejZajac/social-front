import React, { useContext, useState } from 'react';
import { Form, Input, Button, message, Select } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';

const NewOfferForm = () => {
    const history = useHistory();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: any) => {
        setLoading(true);
        try {
            await axios
                .post(`/offer/`, {
                    ...values,
                })
                .then((response) => response.data);
            setLoading(false);
            form.resetFields();
            message.success('Udało się stworzyć ofertę');
            history.push('/dashboard');
        } catch (err) {
            message.error('Coś się nie udało');
            setLoading(false);
        }
    };

    return (
        <Form name='basic' form={form} layout='vertical' initialValues={{ remember: true }} onFinish={onFinish}>
            <Form.Item
                label='Stanowisko'
                name='jobTitle'
                rules={[{ required: true, message: 'Proszę wpisać stanowisko', type: 'string' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item label='Opis' name='jobDescription' rules={[{ required: true }]}>
                <Input.TextArea />
            </Form.Item>

            <Form.Item label='Pensja od' name='pensionFrom' rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item label='Pensja do' name='pensionTo' rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item
                label='Narzędzia wykorzystywane na stanowisku'
                name='skillsInCompany'
                rules={[{ required: true }]}
            >
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

            <Form.Item>
                <Button type='primary' htmlType='submit' loading={loading}>
                    Stwórz ofertę
                </Button>
            </Form.Item>
        </Form>
    );
};

export default NewOfferForm;
