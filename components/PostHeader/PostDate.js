import styled from 'styled-components';
import { bodyFont } from '../../lib/fonts.js';
import { textColor } from '../../lib/colors';

const PostDate = styled.div`
  font-family: ${bodyFont};
  font-weight: 400;
  font-size: 0.8rem;
  color: ${textColor};
  text-align: center;
  text-transform: uppercase;
  padding: 0;
  margin: 0.8em 0;
  width: 100%;
`;

export default PostDate;
