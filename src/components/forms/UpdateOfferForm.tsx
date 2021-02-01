import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

interface IUpdateOfferForm {
    offer: any;
}

const UpdateOfferForm = ({ offer }: IUpdateOfferForm) => {
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const params: any = useParams();

    const onFinish = async (values: any) => {
        setLoading(true);
        try {
            const { title, description } = values;

            await axios.put(`/offer/${params?.id}`, {
                title,
                description,
            });
            setLoading(false);
            message.success('Udało się zaktualizować ofertę');
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
            initialValues={{
                ...offer,
            }}
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
                label='Opis stanowiska'
                name='description'
                rules={[{ required: true, message: 'Proszę napisać opis stanowiska!', type: 'string' }]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item>
                <Button type='primary' htmlType='submit' loading={loading}>
                    Aktualizuj ofertę
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UpdateOfferForm;
