import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './RecommendPage.scss';

export class RecommendPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:false
        }
        this.text = React.createRef();
    }
    componentDidMount(){
        // console.log(this.props);
        this.props.dispatch({
            type:'example/fetch'
        })
    }
    changeShow(){
        this.setState({
            show:true
        })
    }
    changeHide(){
        this.setState({
            show:false
        })
    }
    render() {
        // console.log(this.props);
        let {data} = this.props;
        return (
            <div className={styles.RecommendPage}>
                {/* <Carousel vertical dots={false} className={styles.banner}>
                    <img src="../src/assets/1.jpg" className={styles.img}/>
                    <img src="../src/assets/2.jpg" className={styles.img}/>
                    <img src="../src/assets/3.jpg" className={styles.img}/>
                    <img src="../src/assets/4.jpg" className={styles.img}/>
                </Carousel> */}
                <img src="../src/assets/4.jpg" className={styles.img} alt=''/>
                <span className={styles.change} onClick={()=>this.changeShow()}>
                    <img src="../src/assets/评论.png" alt=''/>
                </span>
                <div className={this.state.show ? styles.changeShow:styles.changeHide}>
                    <h1 onClick={() => this.changeHide()}>关闭</h1>
                    <ul>
                        {
                            data&&data.map((item,index)=>{
                                return <li key={index}><span>{item.text}</span>
                                    <span onClick={(e)=>this.clickFn(e)} data-id={item.id} className={item.status ? styles.starShow : styles.starHide}>❤</span></li>
                            })
                        }
                    </ul>
                    <div className={styles.footer}>
                        <input type="text" ref={this.text}/>
                        <span onClick={()=>this.addNews()}>评论</span>
                    </div>
                </div>
            </div>
        )
    }
    clickFn(e){
        this.props.dispatch({
            type:'example/change',
            payload: e.target.dataset.id
        })
        // console.log(e.target.dataset.id);
        this.setState({
            data: this.props.data
        })
    }
    addNews(){
        // console.log(this.text.current.value);
        this.props.dispatch({
            type:'example/addNews',
            payload:this.text.current.value
        })
        this.setState({
            data: this.props.data
        })
        this.text.current.value = '';
    }
}

export default connect(({example})=>({...example}))(RecommendPage);
