import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from './context/UserContext';

const ProtectedRoute = ({ ...props }) => {
    const { user } = useContext(UserContext);
    if (user?.token) {
        return <Route {...props} />;
    } else {
        return <Redirect to='/login' />;
    }
};

export default ProtectedRoute;
