import { Editor } from '@tinymce/tinymce-react';
// TinyMCE so the global var exists
// eslint-disable-next-line no-unused-vars
import tinymce from 'tinymce/tinymce';

// Theme
import 'tinymce/themes/silver';
// Toolbar icons
import 'tinymce/icons/default';
// Editor styles
import 'tinymce/skins/ui/oxide/skin.min.css';

// importing the plugin js.
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/spellchecker';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/code';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/table';
import 'tinymce/plugins/template';
import 'tinymce/plugins/help';
import 'tinymce/plugins/paste';

import 'tinymce/plugins/code'

// Content styles, including inline UI like fake cursors
/* eslint import/no-webpack-loader-syntax: off */
import contentCss from 'tinymce/skins/content/default/content.min.css';
import contentUiCss from 'tinymce/skins/ui/oxide/content.min.css';

const EditorTinyMce = (props) => {
  const handleEditorChange = (content) => {
    props.setValue(content);
  }
  return (
    <Editor
      value={props.value ? props.value : ''}
      onEditorChange={handleEditorChange}
      init={{
        external_plugins: {
          'tiny_mce_wiris': '/wiris.js',
        },
        skin: true,
        content_css: true,
        content_style: [contentCss, contentUiCss].join('\n'),
        height: 450,
        menubar: 'edit view insert format tools help',
        paste_as_text: true,
        plugins: "link image fullscreen table code charmap tiny_mce_wiris_formulaEditor",
        toolbar: [
          {
            name: 'history', items: ['undo', 'redo']
          },
          {
            name: 'fontselect', items: ['fontselect',]
          },
          {
            name: 'fontsizeselect', items: ['fontsizeselect',],
            className: 'asdfdsagf'
          },
          {
            name: 'formatting', items: ['bold', 'italic', 'underline', 'strikethrough']
          },
          {
            name: 'indentation', items: ['outdent', 'indent']
          },
          {
            name: 'alignment', items: ['alignleft', 'aligncenter', 'alignright', 'alignjustify']
          },
          {
            name: 'lists', items: ['numlist', 'bullist', 'checklist']
          },
          {
            name: 'table', items: ['table']
          },
          {
            name: 'colors', items: ['forecolor', 'backcolor', 'casechange', 'permanentpen', 'formatpainter', 'removeformat']
          },
          {
            name: 'math', items: ['subscript', 'superscript']
          },
          {
            name: 'viris-math', items: ['tiny_mce_wiris_formulaEditor'],
          },
          {
            name: 'viris-chem', items: ['tiny_mce_wiris_formulaEditorChemistry'],
          },
          {
            name: 'chars', items: ['charmap']
          },
          {
            name: 'file', items: ['link', 'image']
          },
          {
            name: 'full', items: ['fullscreen', 'code']
          }
        ],
        toolbar_mode: 'wrap',
      }}
    />
  )
}

export default EditorTinyMce
