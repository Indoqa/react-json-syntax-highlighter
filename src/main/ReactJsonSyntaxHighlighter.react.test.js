import React from 'react';
import ReactDOM from 'react-dom';
import ReactJsonSyntaxHighlighter from './ReactJsonSyntaxHighlighter.react'

it('renders without crashing without code', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactJsonSyntaxHighlighter obj={{}}/>, div);
});

it('renders without crashing with code', () => {
  const div = document.createElement('div');
  const json = {
      "prop": {
          "one":1,
          "bool":true
      },
      "two string": "two"
  };

  ReactDOM.render(<ReactJsonSyntaxHighlighter obj={json}/>, div);
});
