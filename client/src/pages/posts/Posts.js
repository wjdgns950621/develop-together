import React, { useEffect, useState } from "react";
import styles from './Posts.module.css';
import Post from "../../components/mainData/Post";
import logo from '../../img/logo.png'
import ModalPost from '../../components/modalPost/ModalPost.js'
import axios from "axios";
import {useHistory} from 'react-router-dom';

function Posts({userInfo}) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [posts, setPosts] = useState([]);
    const history = useHistory();

    useEffect( () => {
        axios.get('http://localhost:8080/posts')
            .then((res) => {
                setPosts(res.data);
            })
    }, [])

    function ModalClose () {
        setIsOpenModal(!isOpenModal)
    }

    return (
        <div>
            <img className={styles.logo} alt="" src={logo} onClick={() => history.push('/')}/>
            <button className={styles.make__post} onClick={ModalClose}>공고 생성하기</button>
            <div className={styles.line}></div>
            <div className={styles.posts}>
            {posts.map((post) => (
                <Post 
                post={post}
                key={post.id}
                userInfo={userInfo}
                />
            ))}
            </div>
            <div>
                {isOpenModal && <ModalPost ModalClose={ModalClose} userInfo={userInfo}></ModalPost>}
            </div>
        </div>
    )
}

export default Posts;
