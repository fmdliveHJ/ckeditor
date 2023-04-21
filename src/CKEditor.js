import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useState } from 'react';

function CKEditor() {
  const [content, setContent] = useState('');

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  return (
    <div>
      <h2>CKEditor 5 Example</h2>
      <ClassicEditor onChange={handleEditorChange} />
      <div>
        <h2>Editor Content</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

export default CKEditor;
