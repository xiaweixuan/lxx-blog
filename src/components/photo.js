import React, { Component } from 'react'
import axios from 'axios'

const PAGE_SIZE = 9

export default class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list :[],
            currentIndex: 0,
        }
    }

    async componentDidMount() {
      try {
        const {data:{data}} = await axios.get('/api/photos')
        this.setState({
          list: data
        })
      } catch (e) {
        console.log(e)
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
                        list.slice(currentIndex, currentIndex + PAGE_SIZE).map((item, index) => <li key={item.key}>
                          <span className="hex"><img className="hexIn" alt=' ' src={item.img_path}></img></span>
                        </li>)
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