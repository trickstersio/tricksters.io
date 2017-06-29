import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../utils/media';

const QuoteBlock = styled.div`
  box-sizing: border-box;
  margin: 0 1.5em 2em 1.5em;
  padding: 0 1.5rem;
  border-left: 1px solid ${props => props.theme.colors.accent};

  ${media.tablet`
    margin: 0 auto 2em auto;
    width: 100%;
  `} ${media.desktop`
    margin: 0 auto 2em auto;
    width: 100%;
  `};
`;

const QuoteText = styled.div`
  margin: 0 0 1em 0;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.3rem;
  font-style: italic;
`;

const QuoteAuthorName = styled.div`font-size: 0.9rem;`;

const QuoteAuthorPosition = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.secondary};
`;

const Quote = ({ author, position, children }) =>
  (<QuoteBlock>
    <QuoteText>
      {children}
    </QuoteText>
    <QuoteAuthorName>
      {author}
    </QuoteAuthorName>
    <QuoteAuthorPosition>
      {position}
    </QuoteAuthorPosition>
  </QuoteBlock>);

Quote.propTypes = {
  children: PropTypes.node,
  author: PropTypes.string,
  position: PropTypes.string,
};

Quote.defaultProps = {
  children: null,
  author: '',
  position: '',
};

export default Quote;
