import * as React from 'react'
import { mount } from 'utils'

import Button from '../'

it('<Button />', function() {
  // https://github.com/airbnb/enzyme/blob/558d5cfce306b53872d812a9f32d0c0ca9a68395/packages/enzyme/src/RSTTraversal.js#L35-L40
  expect(mount(<Button text="example" />).getDOMNode().classList.contains('example')).toBe(true)
  expect(mount(<Button text="whatever" />).contains('whatever')).toBe(true)
})
