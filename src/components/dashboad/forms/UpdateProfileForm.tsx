import { Form, Input, Button, Select, message } from 'antd';
import axios from 'axios';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import { IUser } from '../../../types/userTypes';

const { Option } = Select;

const UpdateProfileForm = () => {
    const [form] = Form.useForm();
    const { user, setNewUser } = useContext(UserContext);
    const history = useHistory();

    if (user?.location) {
        history.replace('/dashboard');
    }

    const updateProfile = async (data: any) => {
        try {
            const newUserData = await axios
                .put(`/user/${user?.userId}`, {
                    ...data,
                })
                .then((response) => response.data);

            const newUser: IUser = {
                email: newUserData.email,
                token: newUserData.token,
                userId: newUserData.userId,
                location: newUserData.location,
            };

            setNewUser(newUser);

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
        <Form form={form} name='control-hooks' onFinish={onFinish}>
            <Form.Item name='companyName' label='Nazwa firmy' rules={[{ required: true }]}>
                <Input placeholder='Google, Netguru, Sii...' />
            </Form.Item>
            <Form.Item name='companyType' label='Typ firmy' rules={[{ required: true }]}>
                <Select placeholder='Typ firmy'>
                    <Option value='startup'>Startup</Option>
                    <Option value='software_house'>Software House</Option>
                    <Option value='ecommerce'>E-commerce</Option>
                    <Option value='corporation'>Corporation</Option>
                    <Option value='other'>Other</Option>
                </Select>
            </Form.Item>
            <Form.Item name='location' label='Lokalizacja firmy' rules={[{ required: true }]}>
                <Input placeholder='Warszawa, Kraków...' />
            </Form.Item>
            <Form.Item name='shortDescription' label='Krótki opis firmy' rules={[{ required: true }]}>
                <Input placeholder='Lider w Polsce a nawet na świecie' />
            </Form.Item>
            <Form.Item name='companyUrl' label='Adres URL firmy' rules={[{ required: true }]}>
                <Input placeholder='google.com' />
            </Form.Item>
            <Form.Item name='linkedin' label='URL profilu Linkedin'>
                <Input placeholder='linkedin.com/google' />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit' size='large'>
                    Aktualizuj profil
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UpdateProfileForm;
