import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor'
import { browserHistory } from 'react-router';

const PrivateHeader = (props) => {
    const buttonType = Meteor.userId();
    let div = <div>Nothing</div>
    if (buttonType) {
        div = (
            <div>
                <button className='button button--link-text' onClick={() => Accounts.logout()}>Logout</button>
            </div>
        )
    }

    else {
        div = (
            
            <div>
                    <button className='button button--link-text' onClick={() =>   browserHistory.replace('/login')}>Login</button>
                    <button className='button button--link-text' onClick={() =>   browserHistory.replace('/signup')}>Signup</button>
            </div >
        )
    }
    return (
        <div className='header'>
            <div className='header__content'>
                <h1 className='header__title'>{props.title}</h1>
                {div}
            </div>
        </div>
    );
};

export default PrivateHeader;