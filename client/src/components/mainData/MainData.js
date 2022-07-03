import React from "react";
import styles from './MainData.module.css'

function MainData({username, content}) {
    return (
        <div className={styles.component}>
            <div className={styles.data}>
                <span className={styles.username}>{username}</span>
                <div className={styles.line}></div>
                <div className={styles.content}>{content}</div>
            </div>
        </div>
    )
}

export default MainData;