import React from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { console } from 'window-or-global';

const Logout = ({ user }) => {
    const history = useHistory();
    if (user === null) {
        console.log('user 정보 없음');
        history.push('/auth');
    } else {
        firebase
            .auth()
            .signOut()
            .then(function () {
                console.log('Logout');
                history.push('/');
                // Sign-out successful.
            })
            .catch(function (error) {
                console.error(error);
                // An error happened.
            });
    }
    return <></>;
};

export default Logout;
