import {createEditor} from 'lexical';

const config = {
    namespace: 'MyEditor',
    theme: {
        ltr: 'ltr',
        rtl: 'rtl',
        placeholder: 'editor-placeholder',
        paragraph: 'editor-paragraph',
    },
    onError: console.error
};

const editor = createEditor(config);

const contentEditableElement = document.getElementById('editor');

editor.setRootElement(contentEditableElement);
