import React from 'react';
import styled from 'styled-components';
import { accentColor } from '../../lib/colors';

const UListItem = styled.li`
  margin: 0.8em 0;
  position: relative;

  &::before {
    content: '•';
    color: ${accentColor};
    position: absolute;
  }
`;

const UListItemText = styled.div`
  margin-left: 1.5em;
`;

export default ({ children }) =>
  <UListItem><UListItemText>{children}</UListItemText></UListItem>;
