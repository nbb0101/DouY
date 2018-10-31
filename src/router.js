import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
//一级路由
const IndexPage = dynamic({
    component:()=>import('./routes/IndexPage.js')
})
//二级路由
const HomePage = dynamic({
    component:()=>import('./routes/HomePage.js')
})
const FollowPage = dynamic({
    component:()=>import('./routes/FollowPage.js')
})
const NewsPage = dynamic({
    component:()=>import('./routes/NewsPage.js')
})
const UserPage = dynamic({
    component:()=>import('./routes/UserPage.js')
})
//三级路由
const RecommendPage = dynamic({
    component:()=>import('./routes/RecommendPage.js')
})
const AreaPage = dynamic({
    component:()=>import('./routes/AreaPage.js')
})
function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact render={()=>{
                    return <Redirect to="/index/home"/>
                }} />
                <Route path="/index" component={Demo} />
            </Switch>
        </Router>
    );
}

const Demo = ({ match }) => {
    return <IndexPage>
        <Route path="/index/home" component={Home} />
        <Route path="/index/follow" component={FollowPage} />
        <Route path="/index/news" component={NewsPage} />
        <Route path="/index/user" component={UserPage} />
    </IndexPage>
}

const Home = ({ match })=>{
    // console.log(match);
    return <HomePage>
        <Route path="/index/home" exact render={()=>{
            return <Redirect to="/index/home/recommend"/>
        }} />
        <Route path="/index/home/recommend"  component={RecommendPage} />
        <Route path="/index/home/area" component={AreaPage} />
    </HomePage>
}
export default RouterConfig;
