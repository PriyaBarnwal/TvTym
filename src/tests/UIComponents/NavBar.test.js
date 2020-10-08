
import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import NavBar from '../../UIComponents/Navbar'

test('should render navbar correctly', ()=>{
  const renderer = new ReactShallowRenderer()
  renderer.render(<NavBar/>)
  expect(renderer.getRenderOutput()).toMatchSnapshot()
})