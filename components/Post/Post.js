import styled from 'styled-components';
import { bodyFont } from '../../lib/fonts';
import { textColor } from '../../lib/colors';
import media from '../../lib/media';

const Post = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  box-sizing: border-box;
  max-width: none;
  margin: 0 auto;
  padding: 2em 0;

  font-family: ${bodyFont};
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${textColor};

  ${media.tablet`
    font-size: 1rem;
    line-height: 1.5;
    max-width: 768px;
    padding: 2em 0;
  `}

  ${media.desktop`
    font-size: 1rem;
    line-height: 1.5;
    max-width: 768px;
    padding: 2em 0;
  `}
`;

export default Post;
