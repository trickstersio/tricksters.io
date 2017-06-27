import styled, { css } from 'styled-components';
import { bodyFont } from '../../lib/fonts';
import { textColor } from '../../lib/colors';
import media from '../../lib/media';

const PostContent = styled.div`
  width: 100%;
  max-width: none;

  box-sizing: border-box;

  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: stretch;

  font-family: ${bodyFont};
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${textColor};

  ${media.tablet`
    font-size: 1rem;
    line-height: 1.5;
    max-width: 620px;
  `}

  ${media.desktop`
    font-size: 1rem;
    line-height: 1.5;
    max-width: 620px;
  `}
`;

export default PostContent;
