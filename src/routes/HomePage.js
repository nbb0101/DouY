import React, { Component } from 'react';
import { connect } from 'dva';
import { NavLink } from 'dva/router';
import styles from './HomePage.scss';

export class HomePage extends Component {
    render() {
        // console.log(this.props.children);
        return (
            <div className={styles.home}>
                <header className={styles.header}>
                        <NavLink to="/index/home/recommend">推荐</NavLink>
                        <NavLink to="/index/home/area">北京</NavLink>
                </header>
                <main className={styles.main}>
                    {this.props.children}
                </main>
            </div>
        )
    }
    clickFn(){
        console.log(1111111);
    }
}

export default connect()(HomePage);
