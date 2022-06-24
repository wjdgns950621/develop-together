import React from "react";
import Nav from "../../components/nav/Nav";
import MainData from "../../components/mainData/MainData";
import dummyDatas from "../../static/dummyData";
import styles from './Main.module.css'


function Main() {
    return (
        <div>
            <Nav />
            <div className={styles.introduce}>
                <div>
                    {dummyDatas.map((el) => (<MainData username={el.username} content={el.content} />))}
                </div>
                <div>
                프로젝트를 같이 할 동료가 필요할땐?
                </div>
            </div>
        </div>
    )
}

export default Main;