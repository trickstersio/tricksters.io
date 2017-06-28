import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { accentColor } from '../lib/colors';
import { monospaceFont } from '../lib/fonts';
import media from '../lib/media';

const CodeBlock = styled.pre`
  box-sizing: border-box;
  margin: 0 1.5em 2em 1.5em;
  padding: 0 1.5rem;

  background-color: #F7F7F7;

  border-left: 1px solid ${accentColor};

  font-family: ${monospaceFont};
  font-size: 0.9rem;

  overflow: scroll;

  ${media.tablet`
    margin: 0 auto 2em auto;
  `}

  ${media.desktop`
    margin: 0 auto 2em auto;
  `}
`;

const Code = ({ children }) => <CodeBlock><code>{children}</code></CodeBlock>;

Code.propTypes = {
  children: PropTypes.node,
};

Code.defaultProps = {
  children: null,
};

export default Code;
