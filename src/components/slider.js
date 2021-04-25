import React, { Component }from 'react';
import rainMp from '../effets/rain2.mp4'
import{Link} from 'react-router-dom'
export  default class Slider extends Component {
    render(){
        return (
            <div style={{width:'100%',height:'100%'}}>
                <div className='slider'>
                    <video src={rainMp} id="background-video" type="video/mp4" loop autoPlay>
                        Your browser does not support the video tag.
                    </video>
                    <h1>WELCOME</h1>
                </div> 
                <div style={{width:'100%',textAlign:' center'}}>
                    <Link to='/import'><button className='sliderButton'>立即体验</button></Link>
                </div>
            </div>
               
        )
    }
       
}
