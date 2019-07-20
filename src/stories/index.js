import React from 'react'

import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'
import Predictive from '../Predictive'
import CallbackHookComponent from '../CallbackHook'
import { Group1, Group2, Group3, Group4 } from '../FocusGroup'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={ linkTo('Button') } />)

storiesOf('Predictive Input', module)
  .add('Default', () => <Predictive />)

storiesOf('Callback Hook', module)
  .add('Default', () => <CallbackHookComponent />)

storiesOf('focusFirstEmptyInput', module)
  .add('Ex1', () => <Group1 />)
  .add('Ex2', () => <Group2 />)
  .add('Ex3', () => <Group3 />)
  .add('Ex4', () => <Group4 />)