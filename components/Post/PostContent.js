import styled from 'styled-components';
import media from '../../utils/media';

const PostContent = styled.div`
  width: 100%;
  max-width: none;

  box-sizing: border-box;

  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: stretch;

  ${media.tablet`
    max-width: 620px;
  `} ${media.desktop`
    max-width: 620px;
  `};
`;

export default PostContent;
