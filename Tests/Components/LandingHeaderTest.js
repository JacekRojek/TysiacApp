import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import LandingHeader from '../../App/Components/LandingHeader'

const wrapper = shallow(<LandingHeader />)

test('component exists', t => {
  t.is(wrapper.length, 1) // exists
})

test('component structure', t => {
  t.is(wrapper.name(), 'View') // the right root component
  t.is(wrapper.children().length, 1) // has 1 child
  t.is(wrapper.children().first().name(), 'Text') // that child is Text
  t.true(wrapper.children().first().containsMatchingElement('LandingHeader Component')) // That the Component Text is included
})

// test('some other things here', t => {
// const wrapper = shallow(<YourComponentNameHere // SomeProps > )
   // You can add in props as shown above, or use the constant wrapper declared
   // at the top of the file.
// })
