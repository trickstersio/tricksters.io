import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../utils/media';

import PostDate from './PostDate';
import PostTitle from './PostTitle';
import PostAuthor from './PostAuthor';

const PostHeader = styled.div`
  margin: 0 0 1rem 0;
  padding: 0 1.5rem;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  ${media.tablet`
    margin: 0 0 2rem 0;
    padding: 0 2rem;
  `} ${media.desktop`
    margin: 0 0 2rem 0;
    padding: 0 2rem;
  `};
`;

const PostHeaderComponent = (props) => {
  const { date, title, photo, author, position } = props;

  return (
    <PostHeader>
      <PostDate>
        {date}
      </PostDate>
      <PostTitle>
        {title}
      </PostTitle>
      <PostAuthor src={photo} author={author} position={position} />
    </PostHeader>
  );
};

PostHeaderComponent.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  photo: PropTypes.string,
  author: PropTypes.string,
  position: PropTypes.string,
};

PostHeaderComponent.defaultProps = {
  photo: 'static/avatar.png',
  author: '',
  position: '',
};

export default PostHeaderComponent;
