import React from "react";
import styles from './Posts.module.css';
import Post from "../../components/mainData/Post";
import logo from '../../img/logo.png'

function Posts() {
    return (
        <div>
            <img className={styles.logo} alt="" src={logo}/>
            <button className={styles.make__post}>공고 생성하기</button>
            <div className={styles.line}></div>
        </div>
    )
}

export default Posts;
