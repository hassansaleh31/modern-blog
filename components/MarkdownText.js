const marked = require('marked')
import xss from 'xss';
const highlightJs = require('highlight.js')
import React from 'react'


marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code, language) {
        return language ? highlightJs.highlight(language, code).value : highlightJs.highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    xhtml: false
});

class MarkdownText extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div dangerouslySetInnerHTML={{ __html: xss(marked.parse(this.props.text)) }} />
    }
}

export default MarkdownText