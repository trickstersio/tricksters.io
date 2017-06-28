import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { accentColor } from '../lib/colors';
import { headingFont } from '../lib/fonts';
import media from '../lib/media';

const QuoteBlock = styled.div`
  box-sizing: border-box;
  margin: 0 1.5em 2em 1.5em;
  padding: 0 1.5rem;
  border-left: 1px solid ${accentColor};

  ${media.tablet`
    margin: 0 auto 2em auto;
  `}

  ${media.desktop`
    margin: 0 auto 2em auto;
  `}
`;

const QuoteText = styled.div`
  margin: 0 0 1em 0;
  font-family: ${headingFont};
  font-size: 1.3rem;
  font-style: italic;
`;

const QuoteAuthorName = styled.div`
  font-size: 0.9rem;
`;

const QuoteAuthorPosition = styled.div`
  font-size: 0.8rem;
  opacity: 0.5;
`;

const Quote = ({ text, author, position }) =>
  (<QuoteBlock>
    <QuoteText>{text}</QuoteText>
    <QuoteAuthorName>{author}</QuoteAuthorName>
    <QuoteAuthorPosition>{position}</QuoteAuthorPosition>
  </QuoteBlock>);

Quote.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
  position: PropTypes.string,
};

Quote.defaultProps = {
  text: '',
  author: '',
  position: '',
};

export default Quote;
