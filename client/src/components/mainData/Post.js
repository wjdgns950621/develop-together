import React from "react";
import styles from './Post.module.css';

function Post() {
    const parseDate = new Date().toLocaleDateString('ko-kr');

    return (
        <div className={styles.component}>
            <div className={styles.data}>
                <span className={styles.username}>김정훈</span>
                <span className={styles.createdAt}>{parseDate}</span>
                <div className={styles.line}></div>
                <div className={styles.content}>ㅁㄴ라ㅓㅠㅁ나ㅓㅠ라ㅓㅠㅁ나ㅓ뉴륨나ㅠㄴ마류ㅓㅏㅁㄴ</div>
                <div className={styles.member}>현재인원 : / </div>
                <div className={styles.line2}></div>
                <button className={styles.join}>참여</button>
                <button className={styles.cancle}>취소</button>
            </div>
        </div>
    )
}

export default Post;