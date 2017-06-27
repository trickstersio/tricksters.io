import Text from './Text';

const Paragraph = Text.withComponent('p').extend`
  margin: 0 0 2em 0;
`;

export default Paragraph;
