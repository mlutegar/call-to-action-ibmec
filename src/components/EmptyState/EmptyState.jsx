import React from 'react';
import { EmptyContainer, EmptyIcon, EmptyTitle, EmptyDescription } from './Style';

const EmptyState = ({
  title = 'Nenhum e-book encontrado',
  description = 'Não foram encontrados e-books para os critérios de busca. Tente uma busca diferente.'
}) => {
  return (
    <EmptyContainer>
      <EmptyIcon>📚</EmptyIcon>
      <EmptyTitle>{title}</EmptyTitle>
      <EmptyDescription>{description}</EmptyDescription>
    </EmptyContainer>
  );
};

export default EmptyState;