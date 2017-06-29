import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostAuthorBlock = styled.div`
  padding: 0;
  margin: 0.5rem 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const PostAuthorPhotoWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  margin-right: 1em;
  border-radius: 50%;
`;

const PostAuthorPhoto = styled.img`
  width: auto;
  height: 100%;
`;

const PostAuthorCredentials = styled.div`flex-grow: 1;`;

const PostAuthorName = styled.div`font-size: 0.9rem;`;

const PostAuthorPosition = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.secondary};
`;

const PostAuthor = ({ src, author, position }) =>
  (<PostAuthorBlock>
    <PostAuthorPhotoWrapper>
      <PostAuthorPhoto src={src} />
    </PostAuthorPhotoWrapper>
    <PostAuthorCredentials>
      <PostAuthorName>
        {author}
      </PostAuthorName>
      <PostAuthorPosition>
        {position}
      </PostAuthorPosition>
    </PostAuthorCredentials>
  </PostAuthorBlock>);

PostAuthor.propTypes = {
  src: PropTypes.string.isRequired,
  author: PropTypes.string,
  position: PropTypes.string,
};

PostAuthor.defaultProps = {
  author: '',
  position: '',
};

export default PostAuthor;
