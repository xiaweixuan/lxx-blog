import React, { Component } from 'react'
import pic from '../image/b2.jpg'

const PAGE_SIZE = 9

export default class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list :[
                { name: 'Home', key: '0',date:'2020-3-1'},
                { name: 'Article', key: '1',date:'2020-3-1'},
                { name: 'Photo', key: '2',date:'2020-3-1'},
                { name: 'Resume', key: '3',date:'2020-3-1'},
                { name: 'Setting', key: '4',date:'2020-3-1'},
                { name: 'Home', key: '5',date:'2020-3-1'},
                { name: 'Article', key: '6',date:'2020-3-1'},
                { name: 'Photo', key: '7',date:'2020-3-1'},
                { name: 'Resume', key: '8',date:'2020-3-1'},
                { name: 'Photo', key: '9',date:'2020-3-1'},
                { name: 'Resume', key: '10',date:'2020-3-1'},
                { name: 'Setting', key: '11',date:'2020-3-1'},
                { name: 'Home', key: '12',date:'2020-3-1'},
                { name: 'Article', key: '13',date:'2020-3-1'},
                { name: 'Photo', key: '14',date:'2020-3-1'},
                { name: 'Resume', key: '15',date:'2020-3-1'},
            ],
            currentIndex: 0,
        }
    }

    handleRightPage = () => {
        const {list, currentIndex} = this.state
        if(currentIndex+PAGE_SIZE>list.length){
            alert('已经最后一页了')
            return
        }
        this.setState({
            currentIndex: currentIndex + PAGE_SIZE
        })
    }

    handleLeftPage = () => {
        const {list, currentIndex} = this.state
        if(currentIndex-PAGE_SIZE<0){
            alert('已经第一页了')
            return
        }
        this.setState({
            currentIndex: currentIndex - PAGE_SIZE
        })
    }

    render() {
        const { handleRightPage, handleLeftPage } = this;
        const { list, currentIndex } = this.state;

        return (
            <div>
                <div className='photoTop'>
                    <span className='photoText'>see my photo (✧◡✧)</span>
                </div>
                <div className='imgShow'>
                    {
                        list.slice(currentIndex, currentIndex + PAGE_SIZE).map((item, index) => {
                            return(
                            <li key={item.key}>
                                <span className="hex"><img className="hexIn" alt=' ' src={pic}></img></span>
                            </li>
                            )
                        })
                    }
                </div>
                <div className='pageShow'>
                    <div className='btnGroup'>
                    <span className='btn' onClick={handleLeftPage}>-</span>
                    <span>{`当前为第${currentIndex/PAGE_SIZE + 1}页`}</span>
                    <span className='btn' onClick={handleRightPage}>+</span>
                    </div>
                </div>
            </div>
        )
    }
}