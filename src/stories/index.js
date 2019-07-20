import React from 'react'

import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'
import Predictive from '../Predictive'
import CallbackHookComponent from '../CallbackHook'
import FocusGroup from '../FocusGroup'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={ linkTo('Button') } />)

storiesOf('Predictive Input', module)
  .add('Default', () => <Predictive />)

storiesOf('Callback Hook', module)
  .add('Default', () => <CallbackHookComponent />)

storiesOf('focusFirstEmptyInput', module)
  .add('Default', () => <FocusGroup />)