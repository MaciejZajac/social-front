import { Menu } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const TopHeader = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Menu mode='horizontal'>
                <Menu.Item key='oferty'>
                    <Link to='/'>Oferty pracy</Link>
                </Menu.Item>
                <Menu.Item key='profile'>
                    <Link to='/profilefirm'>Profile pracodawców</Link>
                </Menu.Item>
            </Menu>

            <Menu mode='horizontal'>
                <Menu.Item key='cennik'>
                    <Link to='/cennik'>Cennik</Link>
                </Menu.Item>
                {user?.token ? (
                    <>
                        <Menu.Item key='dashboard'>
                            <Link to='/dashboard'>Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key='wyloguj' onClick={() => logout()}>
                            Wyloguj
                        </Menu.Item>
                    </>
                ) : (
                    <>
                        <Menu.Item key='rejestracja'>
                            <Link to='/register'>Rejestracja</Link>
                        </Menu.Item>
                        <Menu.Item key='login'>
                            <Link to='/login'>Zaloguj</Link>
                        </Menu.Item>
                    </>
                )}
            </Menu>
        </div>
    );
};

export default TopHeader;
