import React from 'react'
import {render} from 'react-dom'
import ReactJsonSyntaxHighlighter from '../main/ReactJsonSyntaxHighlighter.react.js'

const renderAppWrappedInReduxAndRouter = () => {
  const obj = {
    stringProp: 'bar',
    numberProp: 1,
    booleanProp: true,
    nullProp: null,
    nestedProp: {
      nestedPropBar: 'bar',
    },
  }
  render(
    <ReactJsonSyntaxHighlighter obj={obj} />,
    document.getElementById('app')
  )
}

const enableHotReloading = () => {
  if (module.hot) {
    module.hot.accept()
  }
}

const main = () => {
  enableHotReloading()
  renderAppWrappedInReduxAndRouter()
}

main()
