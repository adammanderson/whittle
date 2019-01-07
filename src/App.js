import React, { Component } from 'react'
import styled from 'styled-components'
import Paper from './components/Paper'
import Preview from './components/Preview'
import Sections from './components/Sections'

const AppWrapper = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '# Whittle\nWelcome to whittle, the paper app.',
    }
  }

  handleContent = (content) => {
    this.setState({
      content,
    })
  }

  render() {
    const { content } = this.state

    return (
      <AppWrapper>
        <Sections
          content={content}
        />
        <Paper
          content={content}
          handleContent={this.handleContent}
        />
        <Preview
          content={content}
        />
      </AppWrapper>
    )
  }
}

export default App
