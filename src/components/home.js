import React, { Component } from 'react'
import './routes.css'
import pic from '../image/s.gif'
export default class Home extends Component {
    render() {
        return (
            <div>
            <div className='homeTop'>
                <p className='p1'>Dule music is better than all music</p>
                <p className='p2'>have fun together</p>
                <img className='homeImg' alt=" " src={pic}></img>
            </div>
            <div className='homeContent'>
                <div className='homeMiddle'>  
                    <div className='contentFirst'>hi! Predestined You</div>
                    <div className='contentSecond'>
                        <div>很高兴，你能来到我的主页</div>
                        <div>
                            <span>I'am xiaweixuan</span> 前端开发工程师，热爱运动、音乐、绘画，喜欢尝试新鲜的事情，同时也是一名电影迷
                        </div>
                        <div>在这里，记录着我的生活、学习、工作中的点滴。卑辞俚语，不揣浅陋，博一笑尔</div> 
                    </div> 
                </div> 
                <div>

                </div>
            </div>
            </div>

        
        )
    }
}