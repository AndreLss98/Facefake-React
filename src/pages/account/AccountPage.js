import { Component } from 'react';

import Avatar from '../../components/atoms/avatar/Avatar';
import Main from '../../components/atoms/main/Main';
import AccountForm from './organisms/AccountForm/Form';

export default class AccountPage extends Component {

    render() {
        return (
            <Main>
                <Avatar size="large" src="https://images.unsplash.com/photo-1582415892501-9d50fafdbd9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                <AccountForm />
            </Main>
        );
    }
}