import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { accentColor } from '../../lib/colors';

const ListItemText = styled.div`margin-left: 1.5em;`;

const ListItem = styled.li`
  margin: 0.8em 0;
  position: relative;

  &::before {
    color: ${accentColor};
    position: absolute;
  }
`;

const UListItemStyle = ListItem.extend`
  &::before {
    content: '•';
  }
`;

const OListItemStyle = ListItem.extend`
  counter-increment: list-item-counter;

  &::before {
    content: counter(list-item-counter) '.';
  }
`;

const UListItem = ({ children }) =>
  (<UListItemStyle>
    <ListItemText>
      {children}
    </ListItemText>
  </UListItemStyle>);

const OListItem = ({ children }) =>
  (<OListItemStyle>
    <ListItemText>
      {children}
    </ListItemText>
  </OListItemStyle>);

UListItem.propTypes = {
  children: PropTypes.node,
};

UListItem.defaultProps = {
  children: null,
};

OListItem.propTypes = {
  children: PropTypes.node,
};

OListItem.defaultProps = {
  children: null,
};

export { UListItem, OListItem };
