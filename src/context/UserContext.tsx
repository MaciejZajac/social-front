import { FunctionComponent, useEffect, useState, createContext, Dispatch, SetStateAction } from 'react';
import { notification } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { IUser } from '../types/userTypes';

interface IUserContext {
    loadingUser: boolean;
    user?: IUser;
    login: ({ email, password, roleName }: { email: string; password: string; roleName: string }) => void;
    logout: () => void;
    setNewUser: Dispatch<SetStateAction<IUser | undefined>>;
}

const initialState = {
    loadingUser: true,
    login: () => {},
    logout: () => {},
    setNewUser: () => {},
};

const UserContext = createContext<IUserContext>(initialState);

const UserProvider: FunctionComponent = ({ children }) => {
    const history = useHistory();
    const [loadingUser, setLoadingUser] = useState(true);
    const [user, setUser] = useState<IUser | undefined>(undefined);

    useEffect(() => {
        const token = Cookies.get('token') as string;
        if (token) {
            try {
                const userData = jwt.verify(token, process.env.REACT_APP_JWT_KEY!);
                const { email, userId, location } = userData as IUser;
                setUser({ email, token, userId, location });
                setLoadingUser(false);
            } catch (err) {
                const error = new Error(err);

                if (error.message === 'TokenExpiredError: jwt expired') {
                    notification.error({
                        message: 'Token expired',
                        description: 'Try logging again',
                        placement: 'bottomRight',
                    });
                } else {
                    notification.error({
                        message: 'Something went wrong with token',
                        description: 'Try logging again',
                        placement: 'bottomRight',
                    });
                }
                Cookies.remove('token');
            }
        }
        setLoadingUser(false);
    }, []);

    const login = async ({ email, password, roleName }: any): Promise<any> => {
        try {
            const { token } = await axios
                .post(`/user/login`, {
                    email,
                    password,
                    roleName,
                })
                .then((response) => response.data);

            const userData = jwt.verify(token, process.env.REACT_APP_JWT_KEY!);
            const { email: userEmail, userId, location } = userData as IUser;
            setUser({ email: userEmail, token, userId, location });
            Cookies.set('token', token);
            return;
        } catch (err) {
            return err;
        }
    };

    const logout = () => {
        Cookies.remove('token');
        setUser(undefined);
        history.push('/');
    };

    return (
        <UserContext.Provider value={{ user, loadingUser, login, logout, setNewUser: setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
