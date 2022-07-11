import React from "react";
import styles from './ModalPost.module.css';
import {useRef} from 'react';
import axios from "axios";

function ModalPost({ModalClose, userInfo}) {
    const textRef = useRef();

    const handleSubmit = async () => {
        const text = textRef.current.value;
        
        await axios.post('http://localhost:8080/posts/posts', 
        {text: text, userId: userInfo.userId, phone: userInfo.phone, name: userInfo.name}
        )
        .then(() => {
            window.location.replace('/posts')
        })
        .catch((err) => console.log('에러요',err.response.data.message))
    }


    return (
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
            <h1>develop-together</h1>
                <div>
                    <div className={styles.content}>내용</div>
                    <textarea className={styles.text} ref={textRef}></textarea>
                </div>
                <div className={styles.btn}>
                    <button className={styles.createBtn} onClick={handleSubmit}>생성</button>
                    <button className={styles.cancleBtn} onClick={ModalClose}>취소</button>
                </div>
            </div>
        </div>
    )
}

export default ModalPost;