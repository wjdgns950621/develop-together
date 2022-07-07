import React from "react";
import styles from './Login.module.css'
import logo from '../../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom'
import {useRef} from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

function Login() {
    const history = useHistory();
    const userIdRef = useRef();
    const passwordRef = useRef();

    const handleLogin = () => {
        if(userIdRef.current.value === '' || userIdRef.current.value === undefined){ return alert('아이디를 입략해주세요.')}
        if(passwordRef.current.value === '' || passwordRef.current.value === undefined){ return alert('비밀번호를 입력해주세요.')}
        if(userIdRef.current.value && passwordRef.current.value){
        axios
        .post('http://localhost:8080/auth/signin',
        { userId: userIdRef.current.value, password: passwordRef.current.value,},
        { headers: {'Content-Type': 'application/json'}}
        )
        .then((res) => {
            history.push('/posts')
        })
        .catch((err) => alert(err.response.data.message))
    } else {
        alert('모든 항목은 필수 입니다.');
    }
}

    return (
        <div>
            <img className={styles.logo} alt="" src={logo}/>    
            <div className={styles.login}>
                <div className={styles.userInfo}>
                    <FontAwesomeIcon className={styles.id} icon={faUser} />
                    <input className={styles.user__Id} placeholder="아이디" ref={userIdRef}></input>
                </div>
                <div className={styles.userInfo}>
                    <FontAwesomeIcon className={styles.password} icon={faLock} />
                    <input className={styles.user__password} placeholder="비밀번호" ref={passwordRef}></input>
                </div>
                    <button className={styles.btn} onClick={handleLogin}>로그인</button>
            </div>
            <button className={styles.signup} onClick={() => history.push('/signup')}>develop-together가 처음이신가요?</button>
        </div>
    )
}

export default Login;
