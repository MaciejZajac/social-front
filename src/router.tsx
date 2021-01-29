import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Dashboard from './containers/Dashboard';
import ProtectedRoute from './PrivateRoute';
import AddNewOffer from './containers/AddNewOffer';
import OfferDetails from './containers/OfferDetails';
import SingleOffer from './containers/SingleOffer';
import CompanyProfiles from './containers/CompanyProfiles';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/oferta/:id' component={SingleOffer} />
            <Route exact path='/profilefirm' component={CompanyProfiles} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <ProtectedRoute exact path='/dashboard' component={Dashboard} />
            <ProtectedRoute exact path='/dashboard/dodajoferte' component={AddNewOffer} />
            <ProtectedRoute exact path='/dashboard/oferta/:id' component={OfferDetails} />
        </Switch>
    );
};

export default Router;
