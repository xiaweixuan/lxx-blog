import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'
import axios from 'axios'

const uploadByFile = async (file) => {
  const formData = new FormData();
  formData.append('type', 1);
  formData.append('file', file);
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  try {
    const {
      data: { data }
    } = await axios.post(`/photo`, formData, config);
    if (data) {
      return {
        success: 1,
        file: {
          url: data.img_path,
        }
      };
    }
  } catch (error) {
    return {
      success: 0,
      file: {
        url: 'https://codex.so/upload/redactor_images/o_80beea670e49f04931ce9e3b2122ac70.jpg',
      }
    }
  }
  
}

const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  list: List,
  warning: Warning,
  code: Code,
  linkTool: {
    class: LinkTool,
  },
  image: {
    class: Image,
    config: {
      uploader: {
        uploadByFile,
      },
    }
  },
  raw: Raw,
  header: Header,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage
}

export default EDITOR_JS_TOOLS;
