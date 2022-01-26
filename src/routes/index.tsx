import React from 'react';
import { Switch  , Route } from 'react-router-dom';
import Menu from '../pages/Menu';
import Chamada from '../pages/Chamada';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/chamada" component={Chamada} />
    </Switch>
);

export default Routes;