import styled from 'styled-components';
import media from '../../utils/media';

const Post = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  box-sizing: border-box;
  max-width: none;
  margin: 0 auto;
  padding: 2em 0;

  ${media.tablet`
    max-width: 768px;
    padding: 2em 0;
  `} ${media.desktop`
    max-width: 768px;
    padding: 2em 0;
  `};
`;

export default Post;
