import React from "react";
import Nav from "../../components/nav/Nav";
import MainData from "../../components/mainData/MainData";
import dummyDatas from "../../static/dummyData";
import styles from './Main.module.css'
import pic1 from '../../img/pic1.jpeg'
import pic2 from '../../img/pic2.jpeg'
import pic3 from '../../img/pic3.jpeg'
import pic4 from '../../img/pic4.jpeg'
import {useHistory} from 'react-router-dom';

function Main({userInfo}) {
    const history = useHistory();

    function handleGo() {
        if(userInfo){
            history.push('/posts')
        }else {
            history.push('/login')
        }
    }

    return (
        <div className={styles.main}>
            <Nav userInfo={userInfo}/>
            <div className={styles.introduce}>
                <div className={styles.data}>
                    {dummyDatas.map((el) => (<MainData username={el.username} content={el.content}  key={el.id} />))}
                </div>
                <div className={styles.comment}>프로젝트를 같이 할 동료가 필요할떄 !</div>
                <button className={styles.start} onClick={handleGo}>develop-together 시작하기</button>
            </div>
            <div className={styles.picture}>
                <div className={styles.text}>개발자를 위한 공간,  develop-together</div>
                <img className={styles.pic1} alt="pic1" src={pic1}/>
            </div>
            <div>
                <div className={styles.pic}>
                    <div className={styles.pic__container}>
                        <img className={styles.img} alt="" src={pic2}/>
                        <div className={styles.pic__ment}>본인이 백엔드 또는 프론트엔드만 할 줄 알아도!</div>
                    </div>
                    <div className={styles.pic__container}>
                        <img className={styles.img} alt="" src={pic3}/>
                        <div className={styles.pic__ment}>같이 개발 공부를 하고싶은 사람을 찾을때도!</div>
                    </div>
                    <div className={styles.pic__container}>
                        <img className={styles.img} alt="" src={pic4}/>
                        <div className={styles.pic__ment}>다른 사람과 협업으로 프로젝트를 하고 싶을때!</div>
                    </div>
                </div>
                <div className={styles.ment}>
                </div>
            </div>
        </div>
    )
}

export default Main;