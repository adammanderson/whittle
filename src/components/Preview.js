import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

const PreviewWrapper = styled.div`
  flex: 1;
  padding: 2em;
`

const Preview = ({ content }) => (
  <PreviewWrapper>
    <ReactMarkdown source={content} />
  </PreviewWrapper>
)

Preview.defaultProps = {
  content: null,
}

Preview.propTypes = {
  content: PropTypes.string,
}

export default Preview
