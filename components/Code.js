import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';
import styled from 'styled-components';
import media from '../utils/media';

const CodeWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;

  box-sizing: border-box;
  margin: 0 1.5em 2em 1.5em;

  background-color: ${props => props.theme.colors.codeBackground};
  border-left: 1px solid ${props => props.theme.colors.accent};

  overflow-x: hidden;

  ${media.tablet`
    margin: 0 auto 2rem auto;
    width: 100%;
  `} ${media.desktop`
    margin: 0 auto 2rem auto;
    width: 100%;
  `};
`;

const LineNumbersContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  padding: 1rem 0 1rem 1.5rem;
  margin: 0;

  font-family: ${props => props.theme.fonts.monospace};
  font-size: 0.9rem;
  line-height: 1.5;

  color: ${props => props.theme.colors.secondary};
`;

const CodeBlockContainer = styled.div`
  overflow-x: auto;
  & > pre {
    padding: 0;
    margin: 0;
  }
`;

const CodeBlock = styled(Highlight)`
  box-sizing: border-box;
  padding: 1rem;
  margin: 0;

  font-family: ${props => props.theme.fonts.monospace};
  font-size: 0.9rem;
  line-height: 1.5;
`;

const Code = ({ lang, children }) =>
  (<CodeWrapper>
    <LineNumbersContainer>
      {children.split('\n').map((line, index) =>
        (<span key={index}>
          {index + 1}
        </span>),
      )}
    </LineNumbersContainer>
    <CodeBlockContainer>
      <CodeBlock className={lang}>
        {children}
      </CodeBlock>
    </CodeBlockContainer>
  </CodeWrapper>);

Code.propTypes = {
  lang: PropTypes.string,
  children: PropTypes.string,
};

Code.defaultProps = {
  lang: '',
  children: '',
};

export default Code;
