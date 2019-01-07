import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const SectionsWrapper = styled.div`
  flex: 0 0 20%;
  padding: 0;
  border-right: 1px solid #e5e7ea;
`

const SectionTitle = styled.h1`
  margin: 0;
  padding: ${props => (props.sub ? '0.4em 1.2em' : '0.4em 0.6em')};
  font-weight: normal;
  font-size: ${props => (props.sub ? '0.9em' : '1em')};
  border-bottom: 1px solid #e5e7ea;
  cursor: pointer;
`

const Sections = ({ content, handleGoToLine }) => {
  const renderers: ReactMarkdown.Renderers = {
    root: ({ children }) => {
      const headings = children.reduce((acc, { key, props }) => {
        if (!key.includes('heading') || props.level > 2) return acc
        return acc.concat(props.children.map(child => ({
          value: child.props.value,
          level: props.level,
          caret: window.getSelection().baseOffset,
        })))
      }, [])

      return (
        <Fragment>
          {headings.map((heading, index) => {
            const { value, level } = heading
            return (
              <SectionTitle
                key={index}
                onClick={() => handleGoToLine(heading)}
                sub={level > 1}
              >
                {value}
              </SectionTitle>
            )
          })}
        </Fragment>
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
