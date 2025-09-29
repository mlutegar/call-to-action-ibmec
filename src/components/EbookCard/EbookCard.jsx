import React from 'react';
import Button from '../Button/Button';
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardYear,
  CardDescription,
  CardPages,
  ImagePlaceholder
} from './Style';

const EbookCard = ({ ebook, onDownload }) => {
  const handleDownload = () => {
    if (onDownload) {
      onDownload(ebook);
    } else {
      const link = document.createElement('a');
      link.href = ebook.pdfUrl;
      link.download = `${ebook.title}-${ebook.year}-${ebook.semester}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <CardContainer>
      {ebook.coverUrl ? (
        <CardImage src={ebook.coverUrl} alt={`Capa ${ebook.title}`} />
      ) : (
        <ImagePlaceholder>
          <span>📚</span>
          <p>Capa do E-book</p>
        </ImagePlaceholder>
      )}
      <CardContent>
        <CardTitle>{ebook.title}</CardTitle>
        <CardYear>{ebook.year}.{ebook.semester}</CardYear>
        {ebook.description && (
          <CardDescription>{ebook.description}</CardDescription>
        )}
        {ebook.pages && (
          <CardPages>{ebook.pages} páginas</CardPages>
        )}
        <Button onClick={handleDownload} variant="primary" size="medium">
          Baixar
        </Button>
      </CardContent>
    </CardContainer>
  );
};

export default EbookCard;