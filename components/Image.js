import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Figure = styled.div`
  margin: 0 0 1em 0;
  width: 100%;
`;

const FigureCaption = styled.span`
  display: block;
  font-size: 0.8rem;
  opacity: 0.5;
  padding: 1em 1.5rem;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: auto;
`;

const ImageComponent = ({ src, caption }) =>
  <Figure><Image src={src} /><FigureCaption>{caption}</FigureCaption></Figure>;

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string,
};

ImageComponent.defaultProps = {
  caption: '',
};

export default ImageComponent;
