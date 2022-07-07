import React, { useState } from "react";
import styles from './Posts.module.css';
import Post from "../../components/mainData/Post";
import logo from '../../img/logo.png'
import ModalPost from '../../components/modalPost/ModalPost.js'

function Posts({userInfo}) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    

    return (
        <div>
            <img className={styles.logo} alt="" src={logo}/>
            <button className={styles.make__post} onClick={()=> setIsOpenModal(!isOpenModal)}>공고 생성하기</button>
            <div className={styles.line}></div>
            <Post userInfo={userInfo} />
            <div>
                {isOpenModal ? (<ModalPost isOpenModal={isOpenModal}/>) : null}
            </div>
        </div>
    )
}

export default Posts;
