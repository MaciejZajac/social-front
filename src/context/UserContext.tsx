import { message } from 'antd';
import axios from 'axios';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

interface IUserContext {
    loadingUser: boolean;
    user?: {
        email: string;
        token: string;
        userId: string;
        companyName: string;
    };
    login: ({ email, password, roleName }: { email: string; password: string; roleName: string }) => void;
    logout: () => void;
}

const initialState = {
    loadingUser: true,
    login: () => {},
    logout: () => {},
};

const UserContext = React.createContext<IUserContext>(initialState);

const UserProvider: FunctionComponent = ({ children }) => {
    const history = useHistory();
    const [loadingUser, setLoadingUser] = useState(true);
    const [user, setUser] = useState({ email: '', token: '', userId: '', companyName: '' });
    useEffect(() => {
        const token = Cookies.get('token') as string;
        if (token) {
            try {
                const userData: any = jwt.verify(token, process.env.REACT_APP_JWT_KEY!);
                const { email, userId, companyName } = userData;
                setUser({ email, token, userId, companyName });
                setLoadingUser(false);
            } catch (err) {
                console.error(err);
            }
        }
        setLoadingUser(false);
    }, []);

    const login = async ({ email, password, roleName }: any) => {
        try {
            const result = await axios
                .post(`/user/login`, {
                    email,
                    password,
                    roleName,
                })
                .then((response) => response.data);
            const { token } = result;
            const userData: any = jwt.verify(token, process.env.REACT_APP_JWT_KEY!);
            const { email: userEmail, userId, companyName } = userData;
            setUser({ email: userEmail, token, userId, companyName });
            Cookies.set('token', token);
            history.push('/dashboard');
        } catch (err) {
            console.log('err', err);
            message.error('Coś poszło nie tak');
        }
    };

    const logout = () => {
        Cookies.remove('token');
        history.push('/');
        setUser({ email: '', token: '', userId: '', companyName: '' });
    };

    return <UserContext.Provider value={{ user, loadingUser, login, logout }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
