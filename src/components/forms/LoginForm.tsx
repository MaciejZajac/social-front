import React, { useContext, useState } from 'react';
import { Form, Input, Button, Checkbox, Typography, message, Alert } from 'antd';
import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
    const history = useHistory();
    const { login } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const onFinish = async (values: any) => {
        setLoading(true);
        const { email, password } = values;

        // TODO: find some more elegant way of handling it
        const error: any = await login({ email, password, roleName: 'COMPANY' });
        if (error) {
            setError(error.response.data.errors[0].message);
        }
        history.push('/dashboard');

        setLoading(false);
    };

    return (
        <Form layout='vertical' onFinish={onFinish}>
            <Form.Item label='Email' name='email' rules={[{ required: true, message: 'This field cannot be empty!' }]}>
                <Input />
            </Form.Item>

            <Form.Item
                label='Password'
                name='password'
                rules={[{ required: true, message: 'This field cannot be empty!' }]}
            >
                <Input.Password />
            </Form.Item>

            {error && (
                <Alert
                    message='Something went wrong!'
                    description={error}
                    type='error'
                    closable
                    style={{ margin: '15px 0 20px' }}
                    onClose={() => setError('')}
                />
            )}

            <Form.Item>
                <Button type='primary' htmlType='submit' loading={loading}>
                    Zaloguj
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
