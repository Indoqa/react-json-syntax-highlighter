import React from 'react'
import {render} from 'react-dom'
import ReactJsonSyntaxHighlighter from '../src/ReactJsonSyntaxHighlighter.react'

const enableHotReloading = () => {
  if (module.hot) {
    module.hot.accept()
  }
}

const renderAppWrappedInReduxAndRouter = () => {
  const obj = {
    stringProp: 'bar',
    numberProp: 1,
    booleanProp: true,
    nullProp: null,
    nestedProp: {
      nestedPropBar: 'bar'
    }
  }
  render(
    <ReactJsonSyntaxHighlighter obj={obj} />,
    document.getElementById('playground')
  )
}

const main = () => {
  enableHotReloading()
  renderAppWrappedInReduxAndRouter()
}

main()
