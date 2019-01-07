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
      content: '# Whittle\nWelcome to whittle, the paper app.\n\n## Hey',
      cursorPosition: 0,
    }
  }

  handleContent = (content) => {
    this.setState({
      content,
    })
  }

  handleCursorPosition = (cursorPosition) => {
    console.log(cursorPosition)
    console.log(document.createRange())
    this.setState({
      cursorPosition,
    })
  }

  render() {
    const { content, cursorPosition } = this.state

    return (
      <AppWrapper>
        <Sections
          content={content}
        />
        <Paper
          content={content}
          cursorPosition={cursorPosition}
          handleContent={this.handleContent}
          handleCursorPosition={this.handleCursorPosition}
        />
        <Preview
          content={content}
        />
      </AppWrapper>
    )
  }
}

export default App
