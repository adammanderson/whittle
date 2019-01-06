import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const SectionsWrapper = styled.div`
  flex: 0 1 15%;
  padding: 2em;
`

const Sections = ({ content }) => {
  const renderers: ReactMarkdown.Renderers = {
    root: ({ children }) => {
      const headings = children.reduce((acc, { key, props }) => {
        if (!key.includes('heading') || props.level > 2) return acc
        return acc.concat([props.children])
      }, [])
      console.log(headings)
      return (
        <div>
          {headings}
        </div>
      )
    },
  }

  return (
    <SectionsWrapper>
      <ReactMarkdown source={content} renderers={renderers} />
    </SectionsWrapper>
  )
}

Sections.defaultProps = {
  content: null,
}

Sections.propTypes = {
  content: PropTypes.string,
}

export default Sections
