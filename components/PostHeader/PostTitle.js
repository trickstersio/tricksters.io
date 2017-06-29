import styled from 'styled-components';
import media from '../../utils/media';

const PostTitle = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.3;
  box-sizing: border-box;
  text-align: center;
  padding: 0;
  margin: 0.5rem 0;

  ${media.tablet`
    font-size: 2.3rem;
  `} ${media.desktop`
    font-size: 2.3rem;
  `};
`;

export default PostTitle;
