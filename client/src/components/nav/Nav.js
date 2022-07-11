import React, { useState } from "react";
import styles from './Nav.module.css'
import logo from '../../img/logo.png'
import { useHistory } from 'react-router-dom'
import axios from "axios";

function Nav({userInfo}) {
    const history = useHistory();
    
    function loginBtn() {
        history.push('/login')
    }
    function signupBtn() {
        history.push('/signup')
    }
    function signoutBtn() {
        axios.get('http://localhost:8080/auth/signout', {
            headers: {'Content-Type': 'application/json'},
        })
        .then((res) => {
            alert('로그아웃 되셨습니다.')
            window.location.replace('/')
        })
        .catch((err) => console.log(err))
    }

    return (
        <>
        <div className={styles.nav}>
            <img className={styles.logo} alt="로고" src={logo} />
            <div className={styles.sidebar}>
                {userInfo ? 
                <button className={styles.login} onClick={signoutBtn}>로그아웃</button> : <button className={styles.login} onClick={loginBtn}>로그인</button>}
                {!userInfo ?
                <button className={styles.signup} onClick={signupBtn}>회원가입</button> : null
                }   
            </div>
        </div>
        </>
    )
}

export default Nav;