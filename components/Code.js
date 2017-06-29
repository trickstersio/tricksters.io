import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { accentColor } from '../lib/colors';
import { monospaceFont } from '../lib/fonts';
import media from '../lib/media';

const CodeWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 1.5em 2em 1.5em;

  ${media.tablet`
    margin: 0 auto 2rem auto;
    width: 100%;
  `} ${media.desktop`
    margin: 0 auto 2rem auto;
    width: 100%;
  `};
`;

const CodeBlock = styled.pre`
  box-sizing: border-box;
  padding: 1.5rem;
  width: 100%;

  font-family: ${monospaceFont};
  font-size: 0.9rem;

  background-color: #f7f7f7;
  border-left: 1px solid ${accentColor};

  overflow-y: hidden;
`;

const Code = ({ children }) =>
  (<CodeWrapper>
    <CodeBlock>
      <code>
        {children}
      </code>
    </CodeBlock>
  </CodeWrapper>);

Code.propTypes = {
  children: PropTypes.node,
};

Code.defaultProps = {
  children: null,
};

export default Code;
