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
import CompanyProfileDetails from './containers/CompanyProfileDetails';
import RegisterConfirm from './containers/RegisterConfirm';
import AccountActivated from './containers/AccountActivated';
import NotFoundPage from './containers/NotFoundPage';
import CompleteProfile from './containers/CompleteProfile';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/oferta/:id' component={SingleOffer} />
            <Route exact path='/profilefirm' component={CompanyProfiles} />
            <Route exact path='/profil/:profileId' component={CompanyProfileDetails} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/registerconfirm' component={RegisterConfirm} />
            <Route exact path='/activateaccount/:token' component={AccountActivated} />
            <ProtectedRoute exact path='/dashboard' component={Dashboard} />
            <ProtectedRoute exact path='/dashboard/dodajoferte' component={AddNewOffer} />
            <ProtectedRoute exact path='/dashboard/completeyourprofile' component={CompleteProfile} />
            <ProtectedRoute exact path='/dashboard/oferta/:id' component={OfferDetails} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};

export default Router;
