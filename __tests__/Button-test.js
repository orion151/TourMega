import { expect } from '@jest/globals'
import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../src/components/Button/index'

test('tenders correctly', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})
