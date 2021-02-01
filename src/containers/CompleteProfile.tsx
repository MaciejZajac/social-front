import { Col, Row, Typography, Form, Input, Button, Select, message } from 'antd';
import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
const { Option } = Select;

const CompleteProfile = () => {
    const { user } = useContext(UserContext);
    const history = useHistory();
    const [form] = Form.useForm();

    const updateProfile = async (data: any) => {
        try {
            await axios
                .put(`/user/${user?.userId}`, {
                    ...data,
                })
                .then((response) => response.data);
            history.replace('/dashboard');
        } catch (err) {
            console.error('error', err);
            message.error('Coś poszło nie tak');
        }
    };

    const onFinish = (values: any) => {
        updateProfile(values);
    };

    return (
        <>
            <Row style={{ marginTop: '2rem' }}>
                <Col md={{ span: 16, offset: 4 }}>
                    <Typography.Title>Your profile requires update</Typography.Title>
                    <Typography.Paragraph>You need to complete you profile informations</Typography.Paragraph>
                </Col>
            </Row>

            <Row style={{ marginTop: '2rem' }}>
                <Col md={{ span: 16, offset: 4 }}>
                    <Form form={form} name='control-hooks' onFinish={onFinish}>
                        <Form.Item name='companyName' label='Nazwa firmy' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name='companyType' label='Typ firmy' rules={[{ required: true }]}>
                            <Select placeholder='Select type of your company'>
                                <Option value='startup'>Startup</Option>
                                <Option value='software_house'>Software House</Option>
                                <Option value='ecommerce'>E-commerce</Option>
                                <Option value='corporation'>Corporation</Option>
                                <Option value='other'>Other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name='shortDescription' label='Krótki opis firmy' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name='companyURL' label='Adres URL firmy' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name='linkedin' label='URL profilu Linkedin'>
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' size='large'>
                                Aktualizuj profil
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default CompleteProfile;
