import styled from 'styled-components';

export const UList = styled.ul`
  margin: 0 1em 2em 1em;
  padding: 0 1.5rem;
  list-style-type: none;
`;

export const OList = UList.withComponent('ol').extend`
  counter-reset: list-item-counter;
`;
