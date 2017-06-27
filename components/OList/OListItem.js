import React from 'react';
import styled from 'styled-components';
import { accentColor } from '../../lib/colors';

const OListItem = styled.li`
  margin: 0.8em 0;
  position: relative;
  counter-increment: list-item-counter;

  &::before {
    content: counter(list-item-counter) '.';
    color: ${accentColor};
    position: absolute;
  }
`;

const OListItemText = styled.div`
  margin-left: 1.5em;
`;

export default ({ children }) =>
  <OListItem><OListItemText>{children}</OListItemText></OListItem>;
