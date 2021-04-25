import React from 'react';
import { Card } from 'antd';
import EditorJs from 'react-editor-js';
import EdjsParser from './EditorJsParse'

/**
 *  * 编辑器的解析器
 * @param { 解析编辑器输出结果 } parse (value: { blocks: [] }) => string
 * @param { 解析单个block } parseBlock (value: { type?: string; data?: any }) => string
 */

export const edjsParser = new EdjsParser;

/**
 *  * Mackdown编辑器
 * @param { 文章内容 | required } value { blocks: [] }
 * @param { 编辑文章时触发的事件 | required } onChange (value: { blocks: [] }) => void
 * @param { 是否只读 } readOnly boolean
 * @param { 拓展按钮 } extra  React.ReactNode | React.ReactNode[]
 */

const ArticleEditorCard = (props) => {
  const {
    value,
    onChange,
    readOnly,
    extra,
  } = props;

  return <Card
    title={readOnly ? '文章查看' : '文章编辑'}
    extra={extra}
  >
    <EditorJs
      holder="EditorDiv"
      readOnly={readOnly}
      placeholder="开始创作叭～"
      enableReInitialize
      onCompareBlocks={(n, o) => n.length === o.length}
      onChange={(_, b) => onChange && onChange(b)}
      data={value || { blocks: [] }}
    >
      <div id="EditorDiv" />
    </EditorJs>
  </Card >
}

export default ArticleEditorCard;