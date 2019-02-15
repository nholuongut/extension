import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../../app/theme'
import Notice from './Notice'

const Global = createGlobalStyle`
  body {
    background-color: grey;
  }
`

const Wrapper = styled.div`
  width: 384px;
  height: 414px;
`

storiesOf('organisms/Notice', module)
  .addDecorator(getStory => (
    <div>
      <Global/>
      <Router>
        <ThemeProvider theme={theme}>
          <Wrapper>
            {getStory()}
          </Wrapper>
        </ThemeProvider>
      </Router>
    </div>
  ))
  .add('Approval', () => (
    <Notice type='Approval' contributor='Jalil' id='123' message='message' dismiss={action('dismiss')} dismissed={false} />
  ))
  .add('Disapproval', () => (
    <Notice type='Disapproval' contributor='Jalil' id='123' message='message' dismiss={action('dismiss')} dismissed={false} />
  ))
  .add('Tip', () => (
    <Notice type='Tip' contributor='Jalil' id='123' message='message' dismiss={action('dismiss')} dismissed={false} />
  ))
  .add('Other', () => (
    <Notice type='Other' contributor='Jalil' id='123' message='message' dismiss={action('dismiss')} dismissed={false} />
  ))
  .add('No type', () => (
    <Notice contributor='Jalil' id='123' message='message' dismiss={action('dismiss')} dismissed={false} />
  ))
  .add('Undefined type', () => (
    <Notice type={undefined} contributor='Jalil' id='123' message='message' dismiss={action('dismiss')} dismissed={false} />
  ))
  .add('Unknown type', () => (
    <Notice type='some inexistant type' contributor='Jalil' id='123' message='message' dismiss={action('dismiss')} dismissed={false} />
  ))
  .add('dismissed', () => (
    <Notice type='Disapproval' contributor='Jalil' id='123' message='message' dismiss={action('dismiss')} dismissed={true} />
  ))
