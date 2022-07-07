import React, { useState } from "react";
import styles from './SignUp.module.css';
import logo from '../../img/logo.png';
import {useHistory} from 'react-router-dom';
import axios from 'axios';



function SingUp() {
    const history = useHistory();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [userIdMsg, setUserIdMsg] = useState('');
    const [passwordMsg, setPasswordMsg] = useState('');
    const [passwordConfirmMsg, setPasswordConfirmMsg] = useState('');

    const handleUserId = () => {
        setUserIdMsg('아이디는 4글자 이상입니다.')
    }
    const handlePassword = () => {
        setPasswordMsg('비밀번호는 8글자 이상입니다.')
    }
    const handlePasswordConfirm = () => {
        setPasswordConfirmMsg('비밀번호가 일치하지 않습니다.')
    }

    const handleSignup = () => {
        if(userId.length < 4) {return alert('아이디 형식을 맞춰주세요.')}
        if(password.length < 8) {return alert('비밀번호 형식을 맞춰주세요.')}
        if(password !== passwordConfirm) {return alert('비밀번호가 일치하지 않습니다.')}
        if(phone.length !== 11) {return alert('휴대폰번호를 형식에 맞게 입력해주세요')}
        if(userId && password && passwordConfirm && name && phone) {
            axios
            .post('http://localhost:8080/auth/signup',
            { userId: userId, password: password, name: name, phone: phone }
        )
        .then((res) => {
            alert('회원가입이 완료되었습니다!')
            history.push('/login')
        })
        .catch((err) => alert(err.response.data.message))
    } else {
        alert('모든 항목은 필수 입니다');
    }
}

    return (
        <div>
            <div>
                <img className={styles.logo} alt="" src={logo} />
            </div>
            <div className={styles.signup}>
                <div className={styles.user}>
                    <div className={styles.userinfo}>아이디</div>
                    <input className={styles.input} type='text' onChange={(e) => setUserId(e.target.value)} onKeyUp={handleUserId}></input>
                    {userId.length < 4 ? <div className={styles.msg}>{userIdMsg}</div> : <div></div>}
                </div>
                <div className={styles.user}>
                    <div className={styles.userinfo}>비밀번호</div>
                    <input className={styles.input} type='password' onChange={(e) => setPassword(e.target.value)} onKeyUp={handlePassword}></input>
                    {password.length < 8 ? <div className={styles.msg}>{passwordMsg}</div> : <div></div>}
                </div>
                <div className={styles.user}>
                    <div className={styles.userinfo}>비밀번호 확인</div>
                    <input className={styles.input} type='password' onChange={(e) => setPasswordConfirm(e.target.value)} onKeyUp={handlePasswordConfirm}></input>
                    {password !== passwordConfirm ? <div className={styles.msg}>{passwordConfirmMsg}</div> : <div></div>}
                </div>
                <div className={styles.user}>
                    <div className={styles.userinfo}>휴대전화</div>
                    <input className={styles.input} type='text' onChange={(e) => setPhone(e.target.value)}></input>
                    <div className={styles.phone}>"-" 을 제외한 숫자만 입력해주세요.</div>
                </div>
                <div className={styles.user}>
                    <div className={styles.userinfo}>이름</div>
                    <input className={styles.input} type='text' onChange={(e) => setName(e.target.value)}></input>
                </div>
            </div>
            <div className={styles.btn}>
            <button className={styles.signup_btn} onClick={handleSignup}>회원가입</button>
            <button className={styles.signup_btn} onClick={() => history.push('/')}>취소</button>
            </div>
        </div>
    )
}

export default SingUp;