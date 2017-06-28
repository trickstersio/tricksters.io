import styled from 'styled-components';
import { headingFont } from '../../lib/fonts';
import { textColor } from '../../lib/colors';
import media from '../../lib/media';

const PostTitle = styled.h1`
  font-family: ${headingFont};
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.3;
  color: ${textColor};
  box-sizing: border-box;
  text-align: center;
  padding: 0;
  margin: 0.5rem 0;

  ${media.tablet`
    font-size: 2.3rem;
  `}

  ${media.desktop`
    font-size: 2.3rem;
  `}
`;

export default PostTitle;
