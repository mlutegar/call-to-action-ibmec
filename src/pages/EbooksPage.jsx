import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import SearchBar from '../components/SearchBar/SearchBar';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import EbooksGrid from '../components/EbooksGrid/EbooksGrid';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import EmptyState from '../components/EmptyState/EmptyState';
import ebooksData from '../data/ebooks.json';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const EbooksPage = () => {
  const [ebooks, setEbooks] = useState([]);
  const [filteredEbooks, setFilteredEbooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEbooks(ebooksData);
      setFilteredEbooks(ebooksData);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (!term) {
      setFilteredEbooks(ebooks);
    } else {
      const filtered = ebooks.filter(ebook =>
        ebook.year.includes(term) ||
        ebook.semester.includes(term) ||
        `${ebook.year}.${ebook.semester}`.includes(term)
      );
      setFilteredEbooks(filtered);
    }
  };

  return (
    <PageContainer>
      <Header />
      <HeroSection />
      <ContentContainer>
        <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
        <Breadcrumb count={filteredEbooks.length} />
        {isLoading ? (
          <LoadingSpinner />
        ) : filteredEbooks.length > 0 ? (
          <EbooksGrid ebooks={filteredEbooks} />
        ) : (
          <EmptyState />
        )}
      </ContentContainer>
    </PageContainer>
  );
};

export default EbooksPage;