// src/EmailEditor.js
import React, { useState, useCallback } from 'react';
// import {Paper} from '@mui/material';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../forms/quill-editor/Quill.css';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Button } from '@mui/material';
import './Privacy.css';

const Refundpolicy = () => {

    // const [text, setText] = useState('');

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlContent, setHtmlContent] = useState('');

  // Callback to handle editor state changes
  const onEditorStateChange = useCallback((newEditorState) => {
    setEditorState(newEditorState);
    setHtmlContent(draftToHtml(convertToRaw(newEditorState.getCurrentContent())));
  }, []);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiEndpoint = 'https://your-api-endpoint.com/save-content';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: htmlContent }),
      });

      if (response.ok) {
        console.log('Content saved successfully');
      } else {
        console.error('Error saving content');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


    return (
        <PageContainer title="Refund Policy" description="this is Refund page">
            <Breadcrumb title="Refund Policy" subtitle=""></Breadcrumb>
            {/* <Paper>
                <ReactQuill
                value={text}
                onChange={(value) => {
                    setText(value);
                }}
                placeholder="Type here..."
                />
            </Paper> */}
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
            />
            {/* <Button onClick={handleSubmit}>
                Save Content
            </Button> */}
            <Button>
                Save Content{' '}
              </Button>
        </PageContainer>
    );
};

export default Refundpolicy;



