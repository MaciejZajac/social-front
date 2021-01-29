import { Menu } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const TopHeader = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Menu theme='dark' mode='horizontal'>
                <Menu.Item key='1'>
                    <Link to='/'>Oferty pracy</Link>
                </Menu.Item>
                <Menu.Item key='2'>
                    <Link to='/profilefirm'>Profile pracodawców</Link>
                </Menu.Item>
            </Menu>

            <Menu theme='dark' mode='horizontal'>
                {user?.token ? (
                    <>
                        <Menu.Item key='3'>
                            <Link to='/dashboard'>Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key='4' onClick={() => logout()}>
                            Wyloguj
                        </Menu.Item>
                    </>
                ) : (
                    <>
                        <Menu.Item key='5'>
                            <Link to='/register'>Rejestracja</Link>
                        </Menu.Item>
                        <Menu.Item key='6'>
                            <Link to='/login'>Zaloguj</Link>
                        </Menu.Item>
                    </>
                )}
            </Menu>
        </div>
    );
};

export default TopHeader;
