import styled, { css } from 'styled-components';
import { headingFont } from '../lib/fonts';
import { textColor } from '../lib/colors';
import media from '../lib/media';

const Heading = styled.h2`
  font-family: ${headingFont};
  font-weight: 700;
  font-size: 1.3rem;
  color: ${textColor};
  box-sizing: border-box;
  text-align: left;
  padding: 0 1.5rem;
  margin: 1em 0 1em 0;

  ${media.tablet`
    font-size: 1.3rem;
  `}

  ${media.desktop`
    font-size: 1.3rem;
  `}
`;

export default Heading;
