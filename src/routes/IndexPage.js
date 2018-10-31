import React from 'react';
import { connect } from 'dva';
import {NavLink} from 'dva/router';
import styles from './IndexPage.css';

class IndexPage extends React.Component {
    render(){
        return (
                <div className={styles.index}>
                    <section className={styles.section}>
                        {this.props.children}
                    </section>
                    <footer className={styles.footer}>
                        <NavLink to="/index/home">首页</NavLink>
                        <NavLink to="/index/follow">关注</NavLink>
                        <span>＋</span>
                        <NavLink to="/index/news">消息</NavLink>
                        <NavLink to="/index/user">我的</NavLink>
                    </footer>
                </div>
            )
    }
    
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
