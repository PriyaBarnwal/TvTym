
import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import App from '../App'

test('should render App correctly', ()=>{
  const renderer = new ReactShallowRenderer()
  renderer.render(<App/>)
  expect(renderer.getRenderOutput()).toMatchSnapshot()
})