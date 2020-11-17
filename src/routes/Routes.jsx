import React from 'react';
import {BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';
import Movies from '../components/screens/movies/Movies';
import PublicRoutes from './public/PublicRoutes';

function Routes() {
    return (
        <Router>
            <Switch>
                <PublicRoutes exact path = '/:Title?' component = {Movies}/>
                <PublicRoutes component={NotFound} />
            </Switch>
        </Router>
    )
}
export default Routes