import React, { Component } from 'react'
import { Card } from 'antd';
export default class Article extends Component {
    constructor(){
        super();
        this.state={
            articleData:[],
            userData:[]
        }
    } 
    componentDidMount(){
        fetch('api/articles',{
            method:"GET",
        headers:{
            "Content-type":"application/json;charset=utf-8"
        }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({articleData:data});
            console.log(this.state.articleData) ;
         
        })
        .catch(error => {
            console.log(error)
        });
        fetch('api/user',{
            method:"GET",
        headers:{
            "Content-type":"application/json;charset=utf-8"
        }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({userData:data});
            console.log(this.state.userData) ;
         
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        return (
            <div>
                <div className='userCard'>
                    
                </div>
            </div>
        )
    }
}