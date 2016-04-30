# React json syntax highlighter

This is a simple React component that serializes a JavaScript object as highlighted json string.

## Getting Started

Install react component:
```bash
npm install --save react-json-syntax-highlighter
```

Import the component in your file:
```javascript
import ReactJsonSyntaxHighlighter from 'react-json-syntax-highlighter'
```

Use it in your React component:
```javascript
class MyComponent extends React.Component {

  render() {
    const obj = {
      stringProp: 'bar',
      numberProp: 1,
      booleanProp: true,
      nullProp: null,
      nestedProp: {
        nestedPropBar: 'bar'
      }
    }    
    return <ReactJsonSyntaxHighlighter obj={obj} />
  }
}
```
