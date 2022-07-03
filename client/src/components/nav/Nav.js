import React from "react";
import styles from './Nav.module.css'
import logo from '../../img/logo.png'
import { useHistory } from 'react-router-dom'

function Nav() {
    const history = useHistory();

    function loginBtn() {
        history.push('/login')
    }
    function signupBtn() {
        history.push('/signup')
    }

    return (
        <>
        <div className={styles.nav}>
            <img className={styles.logo} alt="로고" src={logo} />
            <div className={styles.sidebar}>
                <button className={styles.login} onClick={loginBtn}>로그인</button>
                <button className={styles.signup} onClick={signupBtn}>회원가입</button>
            </div>
        </div>
        </>
    )
}

export default Nav;