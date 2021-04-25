import React, { Component } from 'react'
import { Card, List, Tag } from 'antd';
import axios from 'axios'
import './index.css'

const ListContent = ({data}) => {
  return <div>
    <h3>{data.title}</h3>
    <p style={{color: 'rgba(0, 0, 0, 0.65)'}}>{data.synopsis}</p>
    <p>{fontNumber(data.text)}</p>
  </div>
}

const IconText = ({ type, text }) => (
  <span>
    <Tag type={type} style={{ marginRight: 8 }}>
    {text}
    </Tag>
  </span>
);

const fontNumber = (date) => {
  const length = date.length
  if (length > 30) {
    var str = ''
    str = date.substring(0, 30) + '......'
    return str
  } else {
    return date
  }
}

class Article extends Component {
    constructor(){
        super();
        this.state={
            articleData: [],
            userData: {}
        }
    } 
    async componentDidMount(){
      const convertArticle = (item) => {
        const text = JSON.parse(item.json_content).blocks.map(item => item.data.text || '').join('').replace(/<.+?>/g,'');
        return {
          ...item,
          text,
        }
      }
      try{
        const {data:{data: article }} = await axios.get('/api/articles')
        const {data:{data: user }} = await axios.get('/api/user')
        this.setState({
          articleData: article.map(item => convertArticle(item)),
          userData: user[0]
        })
      } catch(e){
        console.log(e)
      }
    }
    render() {
      const { articleData, userData } = this.state;
      const { history } = this.props;
        return <div className='article_contain'>
        <div className='user_left_card'>
        <Card
          style={{ marginTop: 24 }}
          bordered={false}
          bodyStyle={{ padding: '8px 32px 32px 32px' }}
        >
          <List
            size="large"
            rowKey="id"
            itemLayout="vertical"
            dataSource={articleData}
            renderItem={item => (
              <List.Item
                key={item.id}
                style={{width: '100%',cursor:'pointer'}}
                onClick={() => history.push(`/import/article/${item.id}`)}
                extra={item.ArticleTypes.map(el=><IconText type="star-o" text={el.name} />)}
              >
                <ListContent data={item} />
              </List.Item>
            )}
          />
        </Card>
        </div>
        <div className='article_right_card'>
          <p>{`作者：${userData.name}`}</p>
          <p>{`签名：${userData.autograph}`}</p>
          <p>{`qq：${userData.qq}`}</p>
          <p>{`email：${userData.email}`}</p>
        </div>
      </div>
    }
}

export default Article
