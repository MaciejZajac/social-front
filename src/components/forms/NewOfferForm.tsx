import React, { useContext, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const NewOfferForm = () => {
    const { user } = useContext(UserContext);
    const history = useHistory();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: any) => {
        setLoading(true);
        try {
            const { title, description } = values;
            await axios
                .post(`/offer/`, {
                    title,
                    description,
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

    const onFinishFailed = (errorInfo: any) => {
        // console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name='basic'
            form={form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label='Stanowisko'
                name='title'
                rules={[{ required: true, message: 'Proszę wpisać stanowisko', type: 'string' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label='Opis'
                name='description'
                rules={[{ required: true, message: 'Proszę napisać opis stanowiska!', type: 'string' }]}
            >
                <Input.TextArea />
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
