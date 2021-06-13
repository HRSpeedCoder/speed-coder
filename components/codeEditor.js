import AceEditor from 'react-ace';
import React from 'react';
import {useState} from 'react';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

export default function codeEditor() {

  var thing;

 // const [input, changeInput] = useState([])


  function onChange(newValue, e) {
    console.log("change", newValue, e);
     thing = newValue

  }

  function submit(value) {
    console.log('yo: ', value);

    // run value
  }

  return (<>
    <AceEditor
      mode="java"
      theme="github"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
    <button onClick={() => submit(thing)}>CLICK ME</button>
  </>
  )

}