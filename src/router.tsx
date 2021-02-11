import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/public/Home';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import Dashboard from './containers/private/Dashboard';
import ProtectedRoute from './PrivateRoute';
import AddNewOffer from './containers/private/AddNewOffer';
import OfferDetails from './containers/public/jobOffers/OfferDetails';
import SingleOffer from './containers/public/jobOffers/SingleOffer';
import CompanyProfiles from './containers/public/companyProfiles/CompanyProfiles';
import CompanyProfileDetails from './containers/public/companyProfiles/CompanyProfileDetails';
import RegisterConfirm from './containers/auth/RegisterConfirm';
import AccountActivated from './containers/auth/AccountActivated';
import NotFoundPage from './containers/public/NotFoundPage';
import CompleteProfile from './containers/private/CompleteProfile';
import PublicProfile from './containers/public/companyProfiles/PublicProfile';
import Pricing from './components/pricing/Pricing';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cennik' component={Pricing} />
            <Route exact path='/oferta/:id' component={SingleOffer} />
            <Route exact path='/profilefirm' component={CompanyProfiles} />
            <Route exact path='/profil/:profileId' component={CompanyProfileDetails} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/registerconfirm' component={RegisterConfirm} />
            <Route exact path='/activateaccount/:token' component={AccountActivated} />
            <ProtectedRoute exact path='/dashboard' component={Dashboard} />
            <ProtectedRoute exact path='/dashboard/profilpubliczny' component={PublicProfile} />
            <ProtectedRoute exact path='/dashboard/dodajoferte' component={AddNewOffer} />
            <ProtectedRoute exact path='/dashboard/completeyourprofile' component={CompleteProfile} />
            <ProtectedRoute exact path='/dashboard/oferta/:id' component={OfferDetails} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};

export default Router;
