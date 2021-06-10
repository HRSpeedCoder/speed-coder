import AceEditor from 'react-ace';
import React from 'react';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

export default function codeEditor() {


  function onChange(newValue, e) {
    console.log("change", newValue, e);
  }

    return (<>
    <AceEditor
      mode="java"
      theme="github"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
    </>
    )

}