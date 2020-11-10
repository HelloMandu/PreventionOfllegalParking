import React, { useState, useReducer, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { signInWithFacebook } from '../../api/facebookAuth';
import { signInWithGithub } from '../../api/githubAuth';
import { signInWithGoogle } from '../../api/googleAuth';

import './Auth.scss';

import { auth } from '../../api/firebase';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

export default () => {
    const [check, setCheck] = useState(false);
    const [state, action] = useReducer(reducer, {
        id: '',
        pw: '',
    });

    const { id, pw } = state;
    const onChange = (e) => action(e.target);

    const history = useHistory();

    const onClick = useCallback(() => {
        if (id !== '1234') {
            alert('아이디가 일치하지 않습니다');
        } else if (pw !== '1234') {
            alert('비밀번호가 일치하지 않습니다.');
        } else {
            alert(id + '님 환영합니다.');
            history.push('/');
        }
    }, [id, pw, history]);

    const userCheck = useCallback(() => {
        auth.onAuthStateChanged((user) => {
            if (user) history.push('/');
        });
    }, [history])

    useEffect(() => {
        userCheck();
        return () => userCheck();
    }, [userCheck]);

    return (
        <div className="container">
            <input type="text" className="id-section" placeholder="아이디" name="id" value={id} onChange={onChange} />
            <input type="text" className="pw-section" placeholder="비밀번호" name="pw" value={pw} onChange={onChange} />
            <div className="login-keep" onClick={() => setCheck(!check)}>
                {!check ? <img src={require('../../assets/images/notcheck.png')} alt="" /> : <img src={require('../../assets/images/check.png')} alt="" />}
                <span>로그인 상태 유지</span>
            </div>
            <button className="btn-login" onClick={onClick}>
                로그인
            </button>
            <div className="auth-footer">
                <button className="href">
                    <img onClick={signInWithGoogle} className="img" src={require('../../assets/images/google.png')} alt="" />
                </button>
                <button className="href">
                    <img onClick={signInWithFacebook} className="img" src={require('../../assets/images/facebook.png')} alt="" />
                </button>
                <button className="href">
                    <img onClick={signInWithGithub} className="img" src={require('../../assets/images/github.svg')} alt="" />
                </button>
            </div>
        </div>
    );
};
