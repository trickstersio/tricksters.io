import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';

const PostWrapperStyle = styled.div`width: 100%;`;

const PostWrapper = ({ children }) =>
  (<ThemeProvider theme={theme}>
    <PostWrapperStyle>
      {children}
    </PostWrapperStyle>
  </ThemeProvider>);

PostWrapper.propTypes = {
  children: PropTypes.node,
};

PostWrapper.defaultProps = {
  children: null,
};

export default PostWrapper;
