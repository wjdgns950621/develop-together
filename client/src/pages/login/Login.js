import React from "react";
import styles from './Login.module.css'
import logo from '../../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom'

function Login() {
    const history = useHistory();
    return (
        <div>
            <img className={styles.logo} alt="" src={logo}/>    
            <div className={styles.login}>
                <div className={styles.userInfo}>
                    <FontAwesomeIcon className={styles.id} icon={faUser} />
                    <input className={styles.user__Id} placeholder="아이디"></input>
                </div>
                <div className={styles.userInfo}>
                    <FontAwesomeIcon className={styles.password} icon={faLock} />
                    <input className={styles.user__password} placeholder="비밀번호"></input>
                </div>
                    <button className={styles.btn}>로그인</button>
            </div>
            <button className={styles.signup} onClick={() => history.push('/signup')}>develop-together가 처음이신가요?</button>
        </div>
    )
}

export default Login;
