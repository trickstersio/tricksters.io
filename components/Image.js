import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from './Text';

const Figure = styled.figure`
  display: block;
  margin: 0 auto 2em auto;
  width: 100%;
`;

const FigureCaption = Text.withComponent('figcaption').extend`
  font-size: 0.8rem;
  opacity: 0.5;
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
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
