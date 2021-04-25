import React, {useEffect, useState} from 'react';
import axios from 'axios'
import EditorJs from 'react-editor-js';
import EDITOR_JS_TOOLS from './tool';

const convertItem = (item) => {
  try {
  const { json_content ,...rest } = item
  console.log(JSON.parse(json_content))
  return {
    json_content: JSON.parse(json_content),
    ...rest
  }
  } catch (error) {
    console.log(1)
    return item
  }
}

const ArticleContent = ({match: {params:{id}}})=> {

  const [data, setData] = useState({})
  useEffect(() => {
    (async () => {
      try {
        const {data:{data }} = await axios.get('/api/articles')
        setData(convertItem(data.filter(item => item.id === Number(id))[0]))
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return <div style={{marginTop:'25px'}}>
    <EditorJs
      holder="EditorDiv"
      readOnly
      enableReInitialize
      data={data.json_content || { blocks: [] }}
      tools={EDITOR_JS_TOOLS}
    >
      <div id="EditorDiv" />
    </EditorJs>
  </div>
}

export default ArticleContent;
