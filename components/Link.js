import Text from './Text';
import { accentColor } from '../lib/colors';

const Link = Text.withComponent('a').extend`
  color: ${accentColor};
  padding: 0;
`;

export default Link;
