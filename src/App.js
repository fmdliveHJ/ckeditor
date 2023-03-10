import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from '@ckeditor/ckeditor5-build-classic';
// import Editor from 'ckeditor5-custom/build/ckeditor';

// import Editor from '@ckeditor5-custom-build/build/ckeditor';
import { Container, Header, Button } from 'semantic-ui-react';
import './ckeditor.css';
function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        <CKEditor
          editor={Editor}
          data='<p>Hello from CKEditor 5!</p>'
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </Container>
    </div>
  );
}

export default App;
