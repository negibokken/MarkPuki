import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/markdown';
import 'brace/theme/textmate';

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  render() {
    return (<AceEditor
      mode="markdown"
      theme="textmate"
      name="aceeditor"
      ref="editor"
      height={1000}
      width="100%"
      fontSize={15}
      editorProps={{
        $blockScrolling: true,
        $highlightActiveLine: false,
      }}
      onChange={this._onChange}
      onLoad={(editor) => {
        editor.getSession().setUseWrapMode(true);
      }}
      value={this.props.value}/>)
  }

  _onChange(text) {
    this.props.edit(text);
  }
}