import React, { Component } from 'react'
import styled from 'styled-components'

const PaperWrapper = styled.div`
  flex: 1;
  padding: 2em;
  background: #dedede;
`

class Paper extends Component {
  componentDidMount() {
    this.paperRef.focus()
  }

  position(e) {
    console.log(window.getSelection())
  }

  render() {
    return (
      <PaperWrapper
        ref={(node) => this.paperRef = node}
        contentEditable
        onKeyUp={this.position}
      >
        Paper
      </PaperWrapper>
    )
  }
}

export default Paper
