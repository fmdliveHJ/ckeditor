import React, { Component, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import BuildedEditor from 'ckeditor5-custom-build/build/ckeditor';

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ckeditor.css';
function App() {
  const [editorData, setEditorData] = useState('');

  function handleEditorChange(event, editor) {
    const data = editor.getData();
    setEditorData(data);
  }

  const editorConfig = {
    contentCss: [
      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
    ],
  };

  const handleEditorReady = (editor) => {
    console.log('Editor is ready to use!', editor);
  };

  const handleSubmit = () => {};

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
      <Container style={{ width: '100%', maxWidth: '100%' }}>
        {/* <Row className='justify-content-md-center'>
          <Col md='auto'>
            <Card style={{ width: '100%', marginTop: '2rem' }}>
              <Card.Header>
                <h2>CKEditor 5 with React-Bootstrap</h2>
              </Card.Header>
              <Card.Body> */}
        <CKEditor
          editor={BuildedEditor}
          data={editorData}
          onChange={handleEditorChange}
          onReady={handleEditorReady}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
          config={editorConfig}
        />
        {/* </Card.Body>
              <Card.Footer>
                <Button variant='primary' onClick={handleSubmit}>
                  Submit
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default App;
