import React, { useState } from 'react';
import { Form, Input, Button, message, Alert } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const onFinish = async (values: any) => {
        setLoading(true);
        try {
            const { email, password } = values;
            await axios
                .post(`/user/register`, {
                    email,
                    password,
                })
                .then((response) => response.data);

            setLoading(false);
            message.success('Udało się stworzyć użytkownika');

            history.push('/login');
        } catch (err) {
            if (err) {
                setError(err.response.data.errors[0].message);
            }

            setLoading(false);
        }
    };

    return (
        <Form layout='vertical' onFinish={onFinish}>
            <Form.Item
                label='Email'
                name='email'
                rules={[{ required: true, message: 'This field cannot be empty!', type: 'email' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label='Hasło'
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
                    Zarejestruj
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;
