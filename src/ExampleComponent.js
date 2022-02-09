import React, { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import BlotFormatter from 'quill-blot-formatter';
import { sanitize } from 'dompurify'
import 'quill/dist/quill.snow.css';

import './styles.css';

const Editor = ({triggerQuery, model, modelUpdate}) => {
  const {input, toolbar} = model;
  let modules = { blotFormatter: {} }
  if (toolbar) modules['toolbar'] = toolbar

  const { quill, quillRef, Quill } = useQuill({
    theme: 'snow',
    modules
  });
  

  if (Quill && !quill) {
    // const BlotFormatter = require('quill-blot-formatter');
    Quill.register('modules/blotFormatter', BlotFormatter);
  }

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldContents) => {
        modelUpdate({output: sanitize(quillRef.current.firstChild.innerHTML)})
      });
    }
  }, [quill, Quill]);

  useEffect(()=>{
    console.log(input)
    if (input && quillRef.current && quillRef.current.firstChild && quill && quill.clipboard) {
      if (input !== quillRef.current.firstChild.innerHTML) {
        quill.clipboard.dangerouslyPasteHTML( input )
        modelUpdate({output: sanitize(quillRef.current.firstChild.innerHTML), input: sanitize(quillRef.current.firstChild.innerHTML)})
      }
    }
  },[input, quillRef.current, quill])


  return (
    <div id={"quill"}>
      <div ref={quillRef} />
    </div>
  );
};

export default Editor;
