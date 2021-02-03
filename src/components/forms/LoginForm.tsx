import React, { useContext, useState } from 'react';
import { Form, Input, Button, Checkbox, Typography, message } from 'antd';
import { UserContext } from '../../context/UserContext';

const LoginForm = () => {
    const { login } = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    const onFinish = (values: any) => {
        setLoading(true);
        try {
            const { email, password } = values;
            login({ email, password, roleName: 'COMPANY' });
            setLoading(false);
        } catch (err) {
            message.error('Coś się nie udało');
            setLoading(false);
        }
    };

    return (
        <Form name='basic' initialValues={{ remember: true }} onFinish={onFinish}>
            <Typography.Title level={2}>Logowanie</Typography.Title>
            <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input />
            </Form.Item>

            <Form.Item
                label='Password'
                name='password'
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name='remember' valuePropName='checked'>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type='primary' htmlType='submit' loading={loading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
