import React, { Component } from 'react'
import{Link,Route,Redirect} from 'react-router-dom'
import Home from '../components/home'
import Article from '../components/Article'
import ArticleContent from '../components/Article/Content'
import Photo from '../components/photo'
import Resume from '../components/resume'
import Setting from '../components/setting'
import down1 from '../image/qq.png'
import down2 from '../image/weixin.png'
import down3 from '../image/github.png'
import down4 from '../image/dingding.png'
export default class Import extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list :[
                { name: 'Home', key: '0', path: '/import/home',activeTag: true},
                { name: 'Article', key: '1', path: '/import/article' ,activeTag: false},
                { name: 'Photo', key: '2', path: '/import/photo' ,activeTag: false},
                { name: 'Resume', key: '3', path: '/import/resume' ,activeTag: false},
                { name: 'Setting', key: '4', path: '/import/setting',activeTag: false },
              ]
          }
    }
    haveclick=(item,index)=>{
            let navList = this.state.list;
            navList.forEach(item=>{
                item.activeTag = false;
            })
            navList[index].activeTag = true;
            this.setState({
                list: navList
            })
    }
    render() {

        return (
            <div className='importBack'>
                <div className='importRoute'>
                    <div className='nav'>
                    {
                    this.state.list.map((item, index) => {
                        return(
                        <div key={index}><Link className={item.activeTag ? 'item item-active' : 'item'} to={item.path}key={index} onClick={this.haveclick.bind(this,item,index)}>{item.name}</Link> </div>
                    )
                    })
                    }
                    </div>
                    <div className='content'>
                        <Route path='/import/home' exact component={Home}/>
                        <Route path='/import/article/:id' component={ArticleContent}/>
                        <Route path='/import/article' exact component={Article}/>
                        <Route path='/import/photo' component={Photo}/>
                        <Route path='/import/resume' component={Resume}/>
                        <Route path='/import/setting' component={Setting}/>
                        <Redirect from='/import' to='/import/home'></Redirect>
                    </div>
                </div>
                <div className='importDown'>
                    <div className='downImg'>
                    <img alt=" " src={down1}></img>
                    <img alt=" " src={down2}></img>
                    <img alt=" " src={down3}></img>
                    <img alt=" " src={down4}></img>
                    </div>
                    <p>Copyright ©2020 冀ICP备19035413号</p>
                </div>
            </div>
        )
    }
}