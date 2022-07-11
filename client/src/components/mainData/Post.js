import React from "react";
import styles from './Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


function Post({post, userInfo}) {
    const parseDate = new Date(post.createdAt).toLocaleDateString('ko-kr');
    const phoneNumber = post.phone.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
    
    function handleDelete() {
        axios.delete(`http://localhost:8080/posts/${post._id}`)
            .then(() => {
                alert('삭제 완료하였습니다.')
                window.location.replace('/posts')
            })
            .catch((err) => console.log(err))
    }
    

    return (
        <div className={styles.component}>
            <div className={styles.data}>
                <span className={styles.username}>{post.name}</span>
                <span className={styles.createdAt}>{parseDate}</span>
                {post.userId === userInfo.userId ?
                <button className={styles.trash} onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrash} />
                </button> : null}
                <div className={styles.line}></div>
                <div>
                <div className={styles.content}>{post.text}</div>
                </div>
                <div className={styles.line2}></div>
                <div className={styles.phone}>휴대전화 : {phoneNumber}</div>
            </div>
        </div>
    )
}

export default Post;