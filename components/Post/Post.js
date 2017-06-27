import styled, { css } from 'styled-components';
import media from '../../lib/media';

const Post = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: none;
  padding: 2em 0;
  margin: 0 auto;
  box-sizing: border-box;

  ${media.tablet`
    max-width: 768px;
    padding: 2em 0;
  `}

  ${media.desktop`
    max-width: 768px;
    padding: 2em 0;
  `}
`;

export default Post;
