import AceEditor from 'react-ace';
import React from 'react';
import {useState} from 'react';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

export default function codeEditor() {

  var storage;

 // const [input, changeInput] = useState([])


  function onChange(newValue, e) {
   // console.log("change", newValue, e);
     storage = newValue

  }

  function submit(value) {
    console.log('yo: ', value);

    // build featured function
    featuredFunction(value)
    // console.log('compiled? ', featuredFunction(value))
  }

  function featuredFunction(value) {
    var obj = eval(value)
    console.log('type: ', obj())
  }

  return (<>
    <AceEditor
      mode="java"
      theme="github"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
    <button onClick={() => submit(storage)}>CLICK ME</button>
  </>
  )

}