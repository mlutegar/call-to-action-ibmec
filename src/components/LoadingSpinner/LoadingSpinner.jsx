import React from 'react';
import { SpinnerContainer, Spinner, LoadingText } from './Style';

const LoadingSpinner = ({ text = 'Carregando e-books...' }) => {
  return (
    <SpinnerContainer>
      <Spinner />
      <LoadingText>{text}</LoadingText>
    </SpinnerContainer>
  );
};

export default LoadingSpinner;