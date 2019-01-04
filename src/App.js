import React from 'react'
import styled from 'styled-components'
import './App.css'
import Paper from './components/Paper'

const App = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
`

export default () => (
  <App>
    <Paper />
  </App>
)
