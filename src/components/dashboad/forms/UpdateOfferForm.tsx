import { Button, Form, Input, message, Select, Space } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const possibleOptions = ['JavaScript', 'React', 'Vue', 'TypeScript', 'Unit testing', 'HTML', 'CSS'];

interface IUpdateOfferForm {
    offer: any;
}

const UpdateOfferForm = ({ offer }: IUpdateOfferForm) => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const params: any = useParams();

    const onFinish = async (values: any) => {
        setLoading(true);
        try {
            const { jobTitle, jobDescription, pensionFrom, pensionTo, requiredSkills } = values;

            await axios.put(`/offer/${params?.id}`, {
                jobTitle,
                jobDescription,
                pensionFrom,
                pensionTo,
                requiredSkills,
            });
            setLoading(false);
            message.success('Udało się zaktualizować ofertę');
            history.push('/dashboard');
        } catch (err) {
            message.error('Coś się nie udało');
            setLoading(false);
        }
    };

    return (
        <Form
            name='basic'
            layout='vertical'
            form={form}
            initialValues={{
                ...offer,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                label='Stanowisko'
                name='jobTitle'
                rules={[{ required: true, message: 'Proszę wpisać stanowisko', type: 'string' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label='Opis'
                name='jobDescription'
                rules={[
                    { required: true, message: 'To pole nie może być puste' },
                    { min: 10, message: 'Opis musi mieć przynajmniej 10 znaków' },
                    { max: 2000, message: 'Opis nie może przekraczać 2000 znaków' },
                ]}
            >
                <Input.TextArea rows={10} />
            </Form.Item>

            <Space size='middle'>
                <Form.Item
                    label='Pensja od'
                    name='pensionFrom'
                    rules={[{ required: true, message: 'To pole nie może być puste' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Pensja do'
                    name='pensionTo'
                    rules={[{ required: true, message: 'To pole nie może być puste' }]}
                >
                    <Input />
                </Form.Item>
            </Space>

            <Form.Item
                label='Narzędzia wykorzystywane na stanowisku'
                name='requiredSkills'
                rules={[{ required: true, message: 'To pole nie może być puste' }]}
            >
                <Select mode='tags' placeholder='React, TypeScript, Scrum...' style={{ width: '100%' }}>
                    {possibleOptions.map((option) => (
                        <Select.Option key={option} value={option}>
                            {option}
                        </Select.Option>
                    ))}
                </Select>
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
