import React from 'react';
import EbookCard from '../EbookCard/EbookCard';
import { GridContainer, GridWrapper } from './Style';

const EbooksGrid = ({ ebooks, onDownload }) => {
  return (
    <GridWrapper>
      <GridContainer>
        {ebooks.map((ebook) => (
          <EbookCard
            key={ebook.id}
            ebook={ebook}
            onDownload={onDownload}
          />
        ))}
      </GridContainer>
    </GridWrapper>
  );
};

export default EbooksGrid;