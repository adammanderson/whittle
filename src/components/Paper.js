import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'debounce'
import styled from 'styled-components'
import replaceCaret from '../utils/replace-caret'

const PaperWrapper = styled.div`
  flex: 1;
  padding: 2em;
  background: #F3F5F9;
  outline: none;
  white-space: pre-wrap;
  font-family: Andale Mono, monospace;
  caret-color: #FA7268;
  ::selection {
    background-color: #FA7268;
    color: white;
  }
`

class Paper extends Component {
  componentDidMount() {
    this.paperRef.focus()
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.content !== this.paperRef.innerText) {
      return true
    }
    return false
  }

  componentDidUpdate() {
    replaceCaret(this.paperRef)
  }

  handleContent = (e) => {
    const { handleContent } = this.props
    const content = e.target.innerText
    handleContent(content)
  }

  render() {
    const { content } = this.props

    return (
      <PaperWrapper
        contentEditable
        ref={(node) => { this.paperRef = node }}
        onKeyUp={e => debounce(this.handleContent(e), 500)}
      >
        { content }
      </PaperWrapper>
    )
  }
}

Paper.propTypes = {
  content: PropTypes.string.isRequired,
  handleContent: PropTypes.func.isRequired,
}

export default Paper
