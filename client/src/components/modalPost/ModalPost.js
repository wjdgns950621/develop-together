import React from "react";
import styles from './ModalPost.module.css';

function ModalPost() {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
                <div className={styles.border}>
            <h1>제목</h1>
            <p>날짜</p>
            <p>상세내용</p>
            </div>
            </div>
        </div>
    )
}

export default ModalPost;