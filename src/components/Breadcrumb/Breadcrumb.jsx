import React from 'react';
import { BreadcrumbContainer, BreadcrumbText } from './Style';

const Breadcrumb = ({ count }) => {
  const getBreadcrumbText = () => {
    if (count === 0) {
      return 'Nenhum e-book encontrado';
    } else if (count === 1) {
      return 'Exibindo 1 e-book';
    } else {
      return `Exibindo ${count} e-books`;
    }
  };

  return (
    <BreadcrumbContainer>
      <BreadcrumbText>{getBreadcrumbText()}</BreadcrumbText>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;