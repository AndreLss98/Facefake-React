import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/home/Home';
import AccountPage from './pages/account/AccountPage';

import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}  render={ props => (
        isAuthenticated()? ( <Component { ...props } /> ) : ( <Redirect to={{ pathname: '/', state: { from: props.location } }} />)
    ) }/>
);

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Home } />
                <PrivateRoute path="/account" component={ AccountPage } />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;