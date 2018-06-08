import React from 'react'
import PropTypes from 'prop-types'

import './ReactJsonSyntaxHighlighter.styl'

// see http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
const ReactJsonSyntaxHighlighter = ({obj}) => {
  if (Object.keys(obj).length === 0) {
    return null
  }

  let json = JSON.stringify(obj, undefined, 2)
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    (match) => {
      let cls = 'number'
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key'
        } else {
          cls = 'string'
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean'
      } else if (/null/.test(match)) {
        cls = 'null'
      }
      return `<span class='${cls}'>${match}</span>`
    })

  return (
    <div className="ReactJsonSyntaxHighlighter">
      <pre dangerouslySetInnerHTML={{__html: json}} />
    </div>
  )
}

ReactJsonSyntaxHighlighter.propTypes = {
  obj: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default ReactJsonSyntaxHighlighter
