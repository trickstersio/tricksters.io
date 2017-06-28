import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../lib/media';

import PostDate from './PostDate';
import PostTitle from './PostTitle';

const PostHeader = styled.div`
  margin: 0 0 2em 0;
  padding: 0 1.5rem;

  ${media.tablet`
    padding: 0 2rem;
  `}

  ${media.desktop`
    padding: 0 2rem;
  `}
`;

const PostHeaderComponent = ({ date, title }) =>
  (<PostHeader>
    <PostDate>{date}</PostDate>
    <PostTitle>{title}</PostTitle>
  </PostHeader>);

PostHeaderComponent.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PostHeaderComponent;
