import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'; // <--- ADDED

import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Essentials,
  UploadAdapter,
  Autoformat,
  Bold,
  Italic,
  Strikethrough,
  Underline,
  Code,
  BlockQuote,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageResize,
  EasyImage,
  Link,
  List,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TextTransformation,
  Alignment,
  Font,
  Highlight,
  HorizontalLine,
  SpecialCharacters,
  SpecialCharactersEssentials,
  RemoveFormat,
  CodeBlock,
  MediaEmbed,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      'heading',
      '|',
      'alignment',
      'bold',
      'italic',
      'strikethrough',
      'underline',
      'code',
      'link',
      'bulletedList',
      'numberedList',
      'blockQuote',
      'imageUpload',
      'imageResize',
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
      'imageTextAlternative',
      'imageToolbar',
      'imageCaption',
      'table',
      'tableToolbar',
      'fontFamily',
      'fontSize',
      'fontColor',
      'fontBackgroundColor',
      'highlight',
      'horizontalLine',
      'specialCharacters',
      'specialCharactersEssentials',
      'removeFormat',
      'codeBlock',
      'mediaEmbed',
      'undo',
      'redo',
    ],
  },
  image: {
    toolbar: [
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
      '|',
      'toggleImageCaption',
      'imageTextAlternative',
    ],
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en',
};
