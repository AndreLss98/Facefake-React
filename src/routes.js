import react from 'react';

import App from './components/App';
import Account from './components/Account';

import { isAuthenticated } from './auth';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}  render={ props => (
        isAuthenticated()? ( <Component { ...props } /> ) : ( <Redirect to={{ pathname: '/', state: { from: props.location } }} />)
    ) }/>
);

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ App } />
                <PrivateRoute path="/" component={ Account } />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;