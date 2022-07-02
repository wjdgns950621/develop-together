import React from "react";
import styles from './SignUp.module.css'
import logo from '../../img/logo.png'
import {useHistory} from 'react-router-dom'

function SingUp() {
    const history = useHistory();
    return (
        <div>
            <div>
                <img className={styles.logo} alt="" src={logo} />
            </div>
            <div className={styles.signup}>
                <div className={styles.user}>
                    <div className={styles.userinfo}>아이디</div>
                    <input className={styles.input}></input>
                </div>
                <div className={styles.user}>
                    <div className={styles.userinfo}>비밀번호</div>
                    <input className={styles.input}></input>
                </div>
                <div className={styles.user}>
                    <div className={styles.userinfo}>비밀번호 확인</div>
                    <input className={styles.input}></input>
                </div>
                <div className={styles.user}>
                    <div className={styles.userinfo}>휴대전화</div>
                    <input className={styles.input}></input>
                </div>
                <div className={styles.user}>
                    <div className={styles.userinfo}>이름</div>
                    <input className={styles.input}></input>
                </div>
            </div>
            <div className={styles.btn}>
            <button className={styles.signup_btn}>회원가입</button>
            <button className={styles.signup_btn} onClick={() => history.push('/')}>취소</button>
            </div>
        </div>
    )
}

export default SingUp;