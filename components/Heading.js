import styled from 'styled-components';
import media from '../utils/media';

const Heading = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: 700;
  font-size: 1.3rem;
  box-sizing: border-box;
  text-align: left;
  padding: 0 1.5rem;
  margin: 1em 0 1em 0;

  ${media.tablet`
    font-size: 1.3rem;
  `} ${media.desktop`
    font-size: 1.3rem;
  `};
`;

export default Heading;
